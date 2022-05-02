import styled from 'styled-components/native';

export const BottomCardContainer = styled.View<{color?: string}>`
  background-color: ${props => props.color || '#fff'};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px 32px;
  height: 382px;
  width: 100%;
`;

export const Header = styled.View``

export const Content = styled.View``

export const Footer = styled.View``