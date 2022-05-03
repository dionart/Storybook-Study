import styled from 'styled-components/native';

// Theme
type DesignTexts = 'heading1' | 'heading2' | 'heading4' | 'heading5' | 'heading6' | 'textbutton'| 'textlabel';
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'black';

export type TextProps = {
  size?: number;
  color?: string;
  weight?: FontWeight;
  opacity?: number;

  // Margin
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;

  type?: DesignTexts;
  textTransform?: 'none' | 'capitalize' | 'lowercase' | 'uppercase';

  align?: 'left' | 'right' | 'center' | 'justify';
};

const VariantStyles: Record<DesignTexts, any> = {
  heading1: `
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0;
  `,
  heading2: `
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0;
  `,
  heading4: `
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.64px;
  `,
  heading5: `
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.64px;
  `,
  heading6: `
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.64px;
  `,
  textbutton: `
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
    text-transform: uppercase;
  `,
  textlabel: `
    font-weight: 500;
    font-size: 12px;
    line-height: 12px; 
    letter-spacing: 0.64px;
    text-transform: uppercase;
  `,
};

export const Text = styled.Text<TextProps>`
  color: ${({color = '#000'}) => color};

  font-size: ${({size = 16}) => size}px;
  /* font-family: ${({weight = 'regular'}) => weight}; */
  opacity: ${({opacity = 1}) => opacity};
  text-transform: ${({textTransform = 'none'}) => textTransform};
  
  /* Margin */
  margin-top: ${({marginTop = 0}) => marginTop}px;
  margin-right: ${({marginRight = 0}) => marginRight}px;
  margin-bottom: ${({marginBottom = 0}) => marginBottom}px;
  margin-left: ${({marginLeft = 0}) => marginLeft}px;
  text-align: ${props => props.align || 'auto'};

  ${({type}) => {
    if (type) {
      return VariantStyles[type]
    }
  }}
`;

export default Text;
