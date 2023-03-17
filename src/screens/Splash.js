import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Header from '../components/splash/Header';
import FrontIcon from '../components/splash/FrontIcon';
import FrontImage from '../components/splash/FrontImage';
import FrontWords from '../components/splash/FrontWords';
import Button from '../components/splash/Button';

const Splash = ({navigation}) => {
  const {containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Header />
      <FrontIcon />
      <FrontImage />
      <FrontWords />
      <Button navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#040404',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Splash;
