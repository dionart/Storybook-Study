// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {Dialog} from './index';
import {CenterView} from '../CenterView';
import { Text } from 'react-native';
import {BottomCard} from '../BottomCard/index';

storiesOf('/Dialog', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Dialog with Bottomc', () => <BottomCard header={<Text>Test</Text>}></BottomCard>)

