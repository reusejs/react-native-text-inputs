export default from './storybook';

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
//   onChangeText,
//   Platform
// } from 'react-native';
// import {Base as Input} from './src';

// const App = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };
//   return (
//     <View>
//       <Input
//         calendar="true"
//         mode="date"
//         label="Select Date"
//         value={date}
//         onChange={v => {
//           onChange(v);
//         }}
//         labelTextColor="#3B82F6"
//         maximumDate={new Date(2300, 10, 20)}
//         minimumDate={new Date(1950, 0, 1)}
//         placeholder="YYYY-MM-DD"
//         icon={<Text>😊</Text>}
//         iconPosition="right"
//         edit={false}
//       />
//     </View>
//   );
// };
// export default App;
