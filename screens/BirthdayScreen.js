import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
  DatePickerIOSComponent,
  Button,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthdayScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    if (Platform.OS === 'ios') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <SafeAreaView>
      <View className="top-4 left-4">
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Ionicons name="chevron-back" size={35} color="#21AEFF" />
        </TouchableOpacity>
      </View>
      <View className="items-center mt-28">
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Text className="text-xl">When's your Birthday?</Text>
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            style={{ height: '75%', width: '10%' }}
          />
        )}
        <TouchableOpacity>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BirthdayScreen;
