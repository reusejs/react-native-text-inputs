import React from 'react';
import {ActivityIndicator, Text, View, Pressable} from 'react-native';

const Button = ({
  disabled = false,
  onPress,
  busy = false,
  loaderIcon = <ActivityIndicator color="#fff" />,
  busyText = 'Processing..',
  ...props
}) => {
  const textStyles = {
    ...(props.textStyles || {
      fontWeight: 'bold',
      color: props.textColor || '#fff',
      letterSpacing: 0,
    }),
  };

  return (
    <Pressable
      disabledd={disabled}
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? props.onPressColor || '#27272A'
            : props.backgroundColor || '#18181B',
          width: '100%',
          borderColor: props.borderColor || '#27272A',
          borderWidth: 1,
          borderRadius: 4,
          paddingVertical: 8,
          paddingHorizontal: 4,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      {busy === false && (
        <View>
          {typeof props.children === 'string' ? (
            <Text style={textStyles}>{props.children}</Text>
          ) : (
            props.children
          )}
        </View>
      )}

      {busy === true && (
        <View
          style={{
            ...(props.loaderIconWrapperStyles || {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }),
          }}>
          <View
            style={{
              ...(props.loaderStyles || {
                marginRight: 20,
              }),
            }}>
            {loaderIcon}
          </View>

          <Text style={textStyles}>{busyText}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
