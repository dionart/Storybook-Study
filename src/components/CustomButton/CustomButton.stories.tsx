// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {CustomButton} from './CustomButton';
import {CenterView} from '../CenterView';

storiesOf('/CustomButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('confirm', () => <CustomButton text="Confirm" colorModifier="confirm" />)
  .add('cancel', () => <CustomButton text="Cancel" colorModifier="cancel" />)
  .add('complementary', () => (
    <CustomButton text="Complementary button" colorModifier="complementary" />
  ))
  .add('underlined', () => (
    <CustomButton text="This is a subtle button" colorModifier="underlined" />
  ))
  .add('disabled', () => (
    <CustomButton text="Confirm" colorModifier="confirm" disabled />
  ));
