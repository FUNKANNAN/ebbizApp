import React from 'react'
import { View, Text } from 'react-native'
import CountDown from 'react-native-countdown-component';
import { styles } from './BookingDetails.styles';
export default function BookingDetails({route}) {

console.log(route)
const {countdown}=route.params
    return (
        <View style={styles.container}>
           <CountDown
        until={countdown}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={20}
      />
        </View>
    )
}
