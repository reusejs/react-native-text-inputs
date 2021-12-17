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
      labelTextColor="#3B82F6"
      // value={value}
      // icon={<Text>+91</Text>}
      borderColor="#3B82F6"
      // color="#3B82F6"
      // iconPosition="left"
      // focusBorderColor="#22D3EE"
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
  ))
  .add('Default Calendar Field', () => (
    <Input
      calendar="true"
      mode="date"
      label="Select Date"
      value={''}
      onChangeText={value => {
        onChangeText(value)
      }}
      labelTextColor="#3B82F6"
      maximumDate={new Date(2300, 10, 20)}
      minimumDate={new Date(1950, 0, 1)}
      placeholder="YYYY-MM-DD"
      icon={<Text>😊</Text>}
      iconPosition="right"
      edit={false}
    />
  ));
