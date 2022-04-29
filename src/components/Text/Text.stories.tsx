// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {Heading1, Heading2, Heading4, Heading5, Heading6, TextButton, TextLabel} from './Text';
import {CenterView} from '../CenterView';

storiesOf('/Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Heading1', () => <Heading1>This is a Heading1</Heading1>)
  .add('Heading2', () => <Heading2>This is a Heading2</Heading2>)
  .add('Heading4', () => <Heading4>This is a Heading4</Heading4>)
  .add('Heading5', () => <Heading5>This is a Heading5</Heading5>)
  .add('Heading6', () => <Heading6>This is a Heading6</Heading6>)
  .add('TextButton', () => <TextButton>This is a TextButton</TextButton>)
  .add('TextLabel', () => <TextLabel>This is a TextLabel</TextLabel>)

