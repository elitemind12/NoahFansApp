import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import RegisterTitle from '../components/register/RegisterTitle';
import Form from '../components/register/Form';
import Description from '../components/register/Description';
import Button from '../components/register/Button';

const Register = ({navigation}) => {
  const {containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <RegisterTitle navigation={navigation} />
      <Form />
      <Description />
      <Button navigation={navigation} />
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

export default Register;
