// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {Text} from './index'
import {CenterView} from '../CenterView';

storiesOf('/Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Heading1', () => <Text type='heading1' >This is a Heading1</Text>)
  .add('Heading2', () => <Text type='heading2' >This is a Heading2</Text>)
  .add('Heading4', () => <Text type='heading4' >This is a Heading4</Text>)
  .add('Heading5', () => <Text type='heading5' >This is a Heading5</Text>)
  .add('Heading6', () => <Text type='heading6' >This is a Heading6</Text>)
  .add('Text Button', () => <Text type='textbutton' >This is a Text Button</Text>)
  .add('Text Label', () => <Text type='textlabel' >This is a Text Label</Text>)

