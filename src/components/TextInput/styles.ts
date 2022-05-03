import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

const isAndroid = Platform.OS === 'android';

const Teste = (props: ContainerProps) => {
  if(props.disabled){
    return '#C9C9C9'
  }else{
    if(props.hasError){
      return '#E64D25'
    }else{
      if(props.hightlighted){
        return '#42BA85'
      }else{
        return '#E7E7E7'
      }
    }
  }
}

interface InputProps{
  disabled?: boolean;
}

interface ContainerProps{
  hasError?: boolean;
  disabled?: boolean;
  hightlighted?: boolean;
}


export const Input = styled.TextInput<InputProps>`
  flex: 1;
  background-color: ${({disabled}) => disabled ? '#E7E7E7' : '#FAFAFA'};
  padding: 0;
  margin: 0;
`;

export const Hint = styled(Text)`
  margin-top: 4px;
  font-size: 12px;
  color: #E64D25;
`;

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  background-color: ${({disabled}) => disabled ? '#E7E7E7' : '#FAFAFA'};
  padding: 0px 12px;
  width: 80%;
  min-height: 46px;
  border-radius: 4.5px;
  border: 1px solid ${({hasError, hightlighted, disabled}) => {
    if(disabled) return '#C9C9C9'
    if(hasError) return '#E64D25'
    if(hightlighted) return '#42BA85'
    return '#E7E7E7'
  }}
  /* elevation: 2; */
  /* box-shadow: 0px 1px 1.4px ${isAndroid ? 'black' : 'rgba(0, 0, 0, 0.2)'}; */
`;


