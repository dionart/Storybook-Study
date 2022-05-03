// src/components/atoms/CustomButton.stories.tsx

import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {CenterView} from '../CenterView';
import { Text } from 'react-native';
import { TextInput } from './index';
import Icon from 'react-native-vector-icons/Feather';
import IconButton from '../IconButton';

storiesOf('/TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Text Input', () => <TextInput label="Título" placeholder='Digite...'/>)
  .add('Text Input Icon Right', () => <TextInput label="Título" placeholder='Digite...' append={<IconButton><Icon name="eye" size={22} color="black" /></IconButton>}/>)
  .add('Text Input Icon Left', () => <TextInput prepend={<IconButton><Icon name="eye" size={22} color="black" /></IconButton>} label="Título" placeholder='Digite...'/>)
  .add('Text Input Error', () => <TextInput  touched={true}  error={'erro'} label="Título" placeholder='Digite...'/>)
  .add('Text Input Disabled', () => <TextInput disabled label="Título" placeholder='Digite...'/>)
  .add('Text Input Highlighted', () => <TextInput highlighted label="Título" placeholder='Digite...'/>)
  .add('Text Input Descriptive', () => <TextInput description='Texto explicativo'  label="Título" placeholder='Digite...'/>)
  .add('Text Input Mandatory', () => <TextInput mandatory  label="Título" placeholder='Digite...'/>)

 