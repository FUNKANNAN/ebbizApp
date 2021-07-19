import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {STYLES} from './RegistrationScreen.styles';

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const resp = await jsonValue;
      if (resp) {
        setUsers(JSON.parse(resp));
      }
    } catch (e) {
      console.log('Error in getData');
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('user', value);
    } catch (e) {
      console.log('Error in storeData');
    }
  };

  const onPressRegister = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.length < 1) {
      Alert.alert('', 'Enter your Name', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (email.length < 1) {
      Alert.alert('', 'Enter your Email', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (password.length < 8) {
      Alert.alert('', 'Password must be grater than 8 characters', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (reg.test(email) === false) {
      Alert.alert('', 'Enter a valid email', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      const userDetails = {Name: name, Email: email, Password: password};
      const newAllUsers = [...users, userDetails];
      storeData(JSON.stringify(newAllUsers));
      Alert.alert('', 'Registration Completed', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={STYLES.container}>
      <View style={STYLES.viewFields}>
        <Text style={STYLES.textLableName}>Enter your Name</Text>
        <TextInput
          placeholder={'Enter your name'}
          style={STYLES.textEnterName}
          onChangeText={setName}
          value={name}
          keyboardType="name-phone-pad"
        />
      </View>
      <View style={STYLES.viewFields}>
        <Text style={STYLES.textLableName}>Enter your Email</Text>
        <TextInput
          placeholder={'Enter your email'}
          style={STYLES.textEnterName}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
      </View>
      <View style={STYLES.viewFields}>
        <Text style={STYLES.textLableName}>Enter your Password</Text>
        <TextInput
          placeholder={'Enter your password'}
          style={STYLES.textEnterName}
          onChangeText={setPassword}
          value={password}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity style={STYLES.btnRegister} onPress={onPressRegister}>
        <Text style={STYLES.textBtnRegister}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
