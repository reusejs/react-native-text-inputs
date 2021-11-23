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
      // focusColor="#22D3EE"
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
      // borderColor="#FDBA74"
      // errorTextStyles={{color: '#FDBA74'}}
    />
  ));
