import styled from 'styled-components/native';
import {Dimensions} from 'react-native';


const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex-grow: 1;

  align-items: center;
  justify-content: flex-end;
  background-color: hsla(0, 0%, 0%, 0.1);
`;

export const Contain = styled.View`
  width: 100%;
  height: ${width * 1.7};

  padding: 10px 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: #fff;
`;

export const List = styled.ScrollView`
  max-height: ${width * 0.9};

  width: 100%;
`;

interface CardProps {
  background?: string;
}

export const ContainerCard = styled.View<CardProps>`
  padding: 13px 15px;

  background-color: ${props => (props.background ? props.background : '#fff')};

  flex-direction: row;
`;

export const Image = styled.View`
  width: 45px;
  height: 45px;

  background-color: #0a3256;
  border-radius: 40px;
`;
export const Dialog = styled.View`
  flex: 1;
  position: absolute;
`;

export const Button = styled.View`
  position: absolute;
  bottom: 50px;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;

  height: 58px;
  background-color: #0a3256;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;
