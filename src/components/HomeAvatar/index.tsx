import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

import { AvatarImage, Container } from './styles';

const HomeAvatar: React.FC = () => {
  return (
    <Container>
      <AvatarImage resizeMode='contain' source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
    </Container>
  );
}

export default HomeAvatar;