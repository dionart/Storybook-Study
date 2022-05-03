import React from 'react';
import { Text } from 'react-native';
import { BottomCardContainer } from './styles';

interface BottomCardProps{
  header?: any,
  content?: any,
  footer?: any
}

export const BottomCard: React.FC<BottomCardProps> = ({
  header
}) => {
  return (
    <BottomCardContainer>
      {header}
    </BottomCardContainer>
  );
};

export default BottomCard;

