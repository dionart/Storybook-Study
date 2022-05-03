// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {CenterView} from '../CenterView';
import { Text } from 'react-native';
import HomeAvatar from './index';

storiesOf('/Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Home Avatar', () => <HomeAvatar></HomeAvatar>)

