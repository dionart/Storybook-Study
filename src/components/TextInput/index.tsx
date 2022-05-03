import React, {ReactNode} from 'react';
import Text from '../Text';
import styled from 'styled-components/native';
import {
  View,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  Platform,
} from 'react-native';
import { Container, Hint, Input } from '../TextInput/styles';

export type TextInputProps = RNTextInputProps & {
  label?: string;
  hint?: string;
  error?: string;
  touched?: boolean;
  description?: string;
  disabled?: boolean;
  highlighted?: boolean;
  mandatory?: boolean;

  prepend?: ReactNode;
  append?: ReactNode;

  // Styles
  style?: ViewStyle;
  inputStyle?: StyleProp<TextStyle>;
  hintStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  hint,
  error,
  touched,
  disabled,
  description,
  highlighted,
  mandatory,

  prepend,
  append,

  // Styles
  style,
  inputStyle,
  hintStyle,
  errorStyle,
  labelStyle,

  ...props
}) => (
  <View style={style}>
    {label && (
      <Text color='#77787B' type='heading2' marginBottom={6} style={labelStyle}>
        {label}{mandatory && <Text color='#E64D25'>*</Text>}
      </Text>
    )}
    {description && (
      <Text color='#77787B' weight='regular' size={14} marginBottom={8}>{description}</Text>
    )}
    <Container hightlighted={highlighted} disabled={disabled} hasError={Boolean(error)}>
      {prepend}
      {/* {mask ? (
          <Input
            placeholderTextColor="#aaa"
            style={[styles.input, inputStyle]}
            {...props}
          />
        ) : ( */}
      <Input editable={!disabled} disabled={disabled} style={[styles.input, inputStyle]} {...props} />
      {/* )} */}
      {append}
    </Container>
    {hint && <Hint style={hintStyle}>{hint}</Hint>}
    {error && touched && <Hint style={errorStyle}>{error}</Hint>}
  </View>
);

export default TextInput;

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderRadius: 4,
    color: '#77787B',
  },
  hint: {
    marginTop: 4,
    fontSize: 12,
    color: "#E64D25",
  },
});
