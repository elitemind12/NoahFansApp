import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from './Button';

const Footer = () => {
  const navigation = useNavigation();
  const home = {
    icon: require('../../assets/images/HOME.png'),
  };
  const search = {
    icon: require('../../assets/images/Union.png'),
  };
  const playlist = {
    icon: require('../../assets/images/PLAYVIDEO.png'),
  };
  const shop = {
    icon: require('../../assets/images/SHOP.png'),
  };
  const profile = {
    icon: require('../../assets/images/PROFILE.png'),
  };
  const {viewStyle, buttonStyle} = styles;
  return (
    <View style={viewStyle}>
      <Button
        buttonStyle={buttonStyle}
        onPress={() => navigation.navigate('Home')}
        image={home}
      />
      <Button
        buttonStyle={buttonStyle}
        onPress={() => navigation.navigate('Browse')}
        image={search}
      />
      <Button
        buttonStyle={buttonStyle}
        onPress={() => navigation.navigate('Videos')}
        image={playlist}
      />
      <Button
        buttonStyle={buttonStyle}
        onPress={() => navigation.navigate('Shop')}
        image={shop}
      />
      <Button
        buttonStyle={buttonStyle}
        onPress={() => navigation.navigate('Profile')}
        image={profile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position: 'absolute',
    bottom: 0,
    height: '10%',
    width: '100%',
    paddingTop: 4,
    backgroundColor: '#D00010',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: -8,
    elevation: 3,
    opacity: 0.95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: 26,
    height: 27,
  },
});

export default Footer;
