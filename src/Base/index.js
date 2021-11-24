import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  value,
  placeholder = 'Enter Text',
  label = null,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const textInputStyles = {
    ...(props.textInputStyles || {
      flex: 1,
      width: '100%',
      color: props.textColor || '#fff',
      letterSpacing: 0,
    }),
  };
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return props.borderColor || '#DC2626';
    }

    if (focused) {
      return props.focusColor || '#52525B';
    }
  };

  return (
    <>
      <View style={{...props.labelStyles}}>
        {label && <Text>{label}</Text>}
      </View>
      <View
        style={{
          ...(props.wrapperStyles || {
            height: 42,
            borderWidth: 1,
            borderRadius: 4,
            paddingHorizontal: 5,
            marginTop: 5,
            alignItems: icon ? 'center' : 'baseline',
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
          }),
        }}>
        <View>{icon && icon}</View>
        <TextInput
          placeholder={placeholder}
          style={textInputStyles}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      <View>
        {error && (
          <Text
            style={{
              ...(props.errorTextStyles || {
                color: '#DC2626',
                paddingTop: 4,
                fontSize: 12,
              }),
            }}>
            {error}
          </Text>
        )}
      </View>
    </>
  );
};

export default Input;
