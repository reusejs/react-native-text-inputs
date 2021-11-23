import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BaseButton from '.';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

storiesOf('Default', module)
  .addDecorator(getStory => (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      }}>
      {getStory()}
    </SafeAreaView>
  ))
  .add('Default Button', () => (
    <BaseButton
      onPress={() => {
        console.log('------ Pressed Button -------');
      }}>
      Hello
    </BaseButton>
  ))
  .add('Default Busy', () => (
    <BaseButton
      busy={true}
      onPress={() => {
        console.log('------ Pressed Button -------');
      }}>
      Hello
    </BaseButton>
  ))
  .add('Default Disabled', () => (
    <BaseButton
      disabled={true}
      onPress={() => {
        console.log('------ Pressed Button -------');
      }}>
      Disabled Button
    </BaseButton>
  ));
