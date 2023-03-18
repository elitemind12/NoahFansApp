import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './FooterBtn';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const home = {
    icon: require('../../assets/images/HOME1.png'),
  };
  const search = {
    icon: require('../../assets/images/Union1.png'),
  };
  const playlist = {
    icon: require('../../assets/images/PLAYLIST1.png'),
  };
  const shop = {
    icon: require('../../assets/images/SHOP1.png'),
  };
  const profile = {
    icon: require('../../assets/images/PROFILE1.png'),
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
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: '#BDBDBD',
  },
  buttonStyle: {
    width: 26,
    height: 27,
    tintColor: '#C4C4C4',
    color: '#C4C4C4',
  },
});

export default Footer;
