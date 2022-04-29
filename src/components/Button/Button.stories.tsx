// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {Button} from './Button';
import {CenterView} from '../CenterView';

storiesOf('/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button Primary', () => <Button>Confirmar</Button>)
  .add('Button Secondary', () => <Button variant='secondary'>Confirmar</Button>)
  .add('Button Tertiary', () => <Button variant='tertiary'>Confirmar</Button>)
  .add('Button Primary Disabled', () => <Button disabled variant='primary'>Confirmar</Button>)
  .add('Button Secondary Disabled', () => <Button disabled variant='secondary'>Confirmar</Button>)
  .add('Button Tertiary Disabled', () => <Button disabled variant='tertiary'>Confirmar</Button>)

