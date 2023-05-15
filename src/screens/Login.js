import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FrontImage from '../components/login/FrontImage';
import PassInput from '../components/login/PassInput';
import UserInput from '../components/login/UserInput';
import LoginButton from '../components/login/LoginButton';
import RegisterButton from '../components/login/RegisterButton';
import ForgotPassword from '../components/login/ForgotPassword';
import LoginWithoutAccountButton from '../components/login/LoginWithoutAccountButton';
import LoginWithGoogle from '../components/login/LoginWithGoogle';

const Login = async ({navigation}) => {
  const {containerStyle, centerButtons} = styles;

  return (
    <View style={containerStyle}>
      <FrontImage />
      <UserInput />
      <PassInput />
      <View style={centerButtons}>
        <LoginButton navigation={navigation} />
        <RegisterButton navigation={navigation} />
      </View>
      <ForgotPassword />
      <LoginWithoutAccountButton />
      <LoginWithGoogle />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#040404',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  centerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '15%',
  },
});

export default Login;
