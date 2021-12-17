import {height} from 'dom-helpers';
import React, {useState, useRef, useEffect} from 'react';
import {Text, View, TextInput, Platform, Pressable, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  value,
  placeholder = 'Enter Text',
  maximumDate = null,
  minimumDate = null,
  label = null,
  calendar = 'false',
  autoFocus = false,
  error,
  editable = true,
  mode = 'date',
  edit = false,
  calenderWidth = '100%',
  ...props
}) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = React.useState(false);
  const textInputStyles = {
    ...(props.textInputStyles || {
      flex: 1,
      width: '100%',
      color: props.textColor || '#000',
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
  const [event, setEvent] = useState(edit ? 'true' : 'false');

  const [showDatePicker, setShowDatePicker] = useState('false');

  const formatDate = value => {
    var d = new Date(value.toString()),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <View>
      <View style={{...props.labelStyles}}>
        {label && (
          <Text style={{color: props.labelTextColor || '#000'}}>{label}</Text>
        )}
      </View>
      {calendar === 'false' && (
        <>
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
                ref={inputRef}
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
        </>
      )}
      {calendar === 'true' && (
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
          {event === 'true' && (
            <Pressable
              style={{
                flex: 1,
                paddingTop: 4,
                paddingBottom: 4,
              }}
              onPress={() => {
                setShowDatePicker('true');
              }}
              value={value}
            />
          )}

          {event === 'false' && (
            <Pressable
              style={{
                flex: 1,
                paddingTop: 4,
                paddingBottom: 4,
                opacity: 0.25,
              }}
              onPress={() => {
                setShowDatePicker('true');
              }}>
              <Text>{placeholder}</Text>
            </Pressable>
          )}
        </View>
      )}

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
      {showDatePicker === 'true' && (
        <View>
          <DateTimePicker
            textColor="#000"
            themeVariant="dark"
            style={{
              flex: 1,
              width: calenderWidth,
              marginTop: 10,
              borderRadius: 4,
            }}
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            value={
              (value !== '' && value != null && !value) === true
                ? new Date(Date.parse(value))
                : new Date()
            }
            mode={mode}
            dateFormat="shortdate"
            is24Hour={true}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            onChange={(event, selectedDate) => {
              if (event.type === 'dismissed') {
                setShowDatePicker('false');
              } else {
                setShowDatePicker('false');
                if (mode === 'time') {
                  onChangeText(
                    `${selectedDate.getHours()}:${selectedDate.getMinutes()}`,
                  );
                } else {
                  onChangeText(formatDate(selectedDate));
                }
                setEvent('true');
              }
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Input;
