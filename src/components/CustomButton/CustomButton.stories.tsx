// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {CustomButton} from './CustomButton';
import {CenterView} from '../CenterView';

storiesOf('/CustomButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('confirm', () => <CustomButton text="Confirm" colorModifier="confirm" />)
  .add('icon', () => (
    <CustomButton icon="home" text="Confirm" colorModifier="confirm" />
  ))
  .add('outline', () => <CustomButton text="Cancel" colorModifier="cancel" />)
  .add('error', () => <CustomButton text="Cancel" colorModifier="error" />)
  .add('success', () => <CustomButton text="Success" colorModifier="success" />)
  .add('complementary', () => (
    <CustomButton text="Complementary button" colorModifier="complementary" />
  ))
  .add('underlined', () => (
    <CustomButton text="Underline button" colorModifier="underlined" />
  ))
  .add('disabled', () => (
    <CustomButton text="Confirm" colorModifier="confirm" disabled />
  ));
