import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-community/picker';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import CountDown from 'react-native-countdown-component';

import {STYLES} from './HomeSreen.styles';

export default function HomeSreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [booking, setBooking] = useState([]);
  const [dropDownUser, setDropDownUser] = useState('');
  const [date, setDate] = useState(new Date());

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const resp = await jsonValue;
      setUsers(JSON.parse(resp));
      const jsonValue1 = await AsyncStorage.getItem('bookings');
      let resp1 = await jsonValue1;
      if (resp1) {
        setBooking(JSON.parse(resp1));
      }
    } catch (e) {
      console.log('Error in getData');
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('bookings', value);
    } catch (e) {
      console.log('Error in storeData');
    }
  };

  const bookOrder = () => {
    setModalVisible(false);
    const userAppoint = {Name: dropDownUser, Time: date.toString()};
    const newAllAppoint = [...booking, userAppoint];
    setBooking(newAllAppoint);
    storeData(JSON.stringify(newAllAppoint));
  };

  const getCalculatedTime = data => {
    const prev = moment(new Date(data.Time), 'H:mm:ss');
    const now = moment(new Date(), 'H:mm:ss');
    let diff = moment(prev).diff(moment(now), 'seconds');
    return diff;
  };

  return (
    <View style={STYLES.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={STYLES.modelView}>
          <View style={STYLES.textHeading}>
            <Text style={STYLES.textModelHeading}>BOOK NOW</Text>
            <TouchableOpacity
              style={STYLES.modelCloseIcon}
              onPress={() => setModalVisible(false)}>
              <Image
                source={require('../../images/clsIcon.png')}
                style={STYLES.modelCloseIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={STYLES.pickerView}>
            <Picker
              prompt={'---  Select User'}
              selectedValue={dropDownUser}
              style={{width: '97%'}}
              onValueChange={dropDownUser => {
                setDropDownUser(dropDownUser);
              }}>
              {users?.map(item => (
                <Picker.Item label={item.Name} value={item.Name} />
              ))}
            </Picker>
          </View>
          <View style={STYLES.datePickerView}>
            <DatePicker
              date={date}
              onDateChange={setDate}
              mode={'datetime'}
              minimumDate={new Date()}
            />
          </View>
          <TouchableOpacity
            style={STYLES.btnBookAppointment}
            onPress={bookOrder}>
            <Text style={STYLES.textBookAppointment}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={STYLES.listViewHomeData}>
        <FlatList
          data={booking}
          renderItem={({item, index}) => (
            <View style={STYLES.bookingListView}>
              <View style={STYLES.textSlNo}>
                <Text style={{fontSize:14, fontWeight:"bold"}}>{index + 1}.</Text>
              </View>
              <View style={STYLES.textName}>
                <Text style={{fontSize:16,marginLeft:10,marginRight:10}}>{item.Name}</Text>
              </View>
              <View style={STYLES.textCountDown}>
              <CountDown
                until={getCalculatedTime(item)}
                onFinish={() => alert(index + 1 + '.   ' + item.Name + '   finished')}
                onPress={() => alert('hello')}
                size={16}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: 'lightblue'}}
              />
              </View>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={STYLES.btnAddBtn}
        onPress={() => {
          setModalVisible(!modalVisible);
          setDropDownUser(users[0]?.Name);
        }}>
        <Image
          source={require('../../images/addBtn.png')}
          style={STYLES.addBtnIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
