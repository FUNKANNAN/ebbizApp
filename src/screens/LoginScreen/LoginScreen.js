import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {STYLES} from './LoginScreen.styles';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const resp = await jsonValue;
      setUsers(JSON.parse(resp));
    } catch (e) {
      console.log('Error in getData');
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);

  const onPressLogin = () => {
    const currentUser = users?.filter(item => {
      if (item.Email == email && item.Password == password) {
        return item;
      }
    });
    if (currentUser.length < 1) {
      Alert.alert('', 'Invalid Credentials', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      navigation.navigate('HomeSreen', currentUser);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View>
      <Image
        source={require('../../images/login-back.png')}
        style={STYLES.ImageBackground}
      />
      <SafeAreaView style={STYLES.container}>
        <View>
          <Text style={STYLES.textLogin}>Log In!</Text>
        </View>
        <View style={STYLES.formsContainer}>
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
          <TouchableOpacity style={STYLES.btnLogin} onPress={onPressLogin}>
            <Text style={STYLES.textBtnLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={STYLES.btnNewUser} onPress={onPressSignUp}>
            <Text style={STYLES.textBtnNewUser}>New User? | signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
