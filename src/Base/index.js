import {height} from 'dom-helpers';
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
    } else if (focused) {
      return props.focusBorderColor || props.borderColor;
    }
    return props.borderColor;
  };

  return (
    <>
      <View style={{...props.labelStyles}}>
        {label && (
          <Text style={{color: props.labelTextColor || '#000'}}>{label}</Text>
        )}
      </View>
      <View
        style={{
          ...(props.wrapperStyles || {
            height: props.height || 42,
            borderWidth: props.borderWidth || 1,
            borderRadius: props.borderRadius || 4,
            paddingHorizontal: props.paddingHorizontal || 5,
            marginTop: props.marginTop || 5,
            alignItems: 'center',
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection() || 'row',
          }),
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          {icon && icon}
        </View>
        <View
          style={{
            height: props.height || 42,
          }}>
          <TextInput
            placeholder={placeholder}
            style={textInputStyles}
            color={props.color || '#000'}
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
