import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Form from '../components/payment/Form';

const Payment = ({navigation}) => {
  const {containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Form navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default Payment;
