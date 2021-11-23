import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BaseButton from '.';
import {SafeAreaView} from 'react-native';

storiesOf('Outline', module)
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
  .add('Outline Default', () => (
    <BaseButton
      onPress={() => {
        console.log('------ Pressed Button -------');
      }}>
      Hello
    </BaseButton>
  ));
