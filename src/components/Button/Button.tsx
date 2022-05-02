import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps, TextStyle} from 'react-native';


type ButtonVariants = 'primary' | 'secondary' | 'tertiary' ;

type ButtonThemeProps = {
  variant?: ButtonVariants;
};

export type ButtonProps = TouchableOpacityProps &
  ButtonThemeProps & {
    textStyle?: TextStyle;
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  textStyle,
  variant = 'primary',
  activeOpacity = 0.6,
  disabled,
  ...props
}) => {
  const containerProps = {...props, activeOpacity, variant, disabled};
  const textProps = {variant, disabled, style: textStyle};

  return (
    <Container {...containerProps} accessibilityRole="button">
      <Text {...textProps}>{children}</Text>
    </Container>
  );
};

export default Button;

type ButtonStyle = {
  disabled: {container: string; text: string};
  container?: string;
  text?: string;
};

const VariantStyles: Record<ButtonVariants, ButtonStyle> = {
  primary: {
    disabled:{
      container: `
        background-color: #9E9E9E;
        elevation: 1;
      `,
      text: `
        color: #ffff;
      `,
    },
    container: `
      background-color: #ED0F69;
    `,
    text: `
      color: #ffff;
    `,
  },
  secondary: {
    disabled:{
      container: `
        background-color: #ffff;
        elevation: 1;
        border: 1px solid #9E9E9E
      `,
      text: `
        color: #9E9E9E;
      `,
    },
    container: `
      background-color: #ffff;
      border: 1px solid #ED0F69;
    `,
    text: `
      color: #ED0F69;
    `,
  },
  tertiary: {
    disabled:{
      container: `
        background-color: transparent;
        elevation: 1;
      `,
      text: `
        color: #9E9E9E;
      `,
    },
    container: `
      background-color: transparent;
    `,
    text: `
      color: #ED0F69;
      text-decoration-line: underline;
    `,
  },
};

const Container = styled.TouchableOpacity<ButtonThemeProps>`
  /* min-height: 40px; */
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  width: 353px;
  justify-content: center;
  elevation: 5;
  ${({variant = 'primary', disabled}) => {
    if (disabled && VariantStyles[variant].disabled) {
      return VariantStyles[variant].disabled.container;
    }
    return VariantStyles[variant].container;
  }}
`;

const Text = styled.Text<ButtonThemeProps & {disabled?: boolean | null}>`
  font-size: 14px;
  font-weight: 500 ;
  text-transform: uppercase;

  ${({variant = 'primary', disabled}) => {
    if (disabled) {
      return VariantStyles[variant].disabled.text;
    }
    return VariantStyles[variant].text;
  }}
`;
