import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import Input from '.';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  onChangeText,
} from 'react-native';
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [value, onChangeText] = React.useState();

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
  .add('Default Input Text', () => (
    <Input
      label="Username"
      onChangeText={text => onChangeText(text)}
      // value={value}
      icon={<Text>😂</Text>}
      iconPosition="right"
    />
  ))
  .add('Default Required Field', () => (
    <Input
      label="Username"
      onChangeText={text => onChangeText(text)}
      // value={value}
      icon={<Text>😊</Text>}
      iconPosition="left"
      error={'This field is required'}
    />
  ));
