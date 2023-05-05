import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const {viewStyle, imageStyle, textStyle} = styles;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={viewStyle}
      onPress={() => navigation.navigate('Home')}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/smallStroke.png')}
      />
      <Text style={textStyle}>NOAH House</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#000000',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageStyle: {
    width: 13,
    height: 12,
    marginLeft: 10,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 16,
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default Header;
