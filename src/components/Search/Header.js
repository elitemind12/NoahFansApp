import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const {viewStyle, subViewStyle, textStyle, searchStyle} = styles;
  return (
    <View style={viewStyle}>
      <View style={subViewStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/images/LineStroke.png')} />
        </TouchableOpacity>
        <Text style={textStyle}>Browse</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={searchStyle}
          source={require('../../assets/images/Union.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: '10%',
    backgroundColor: '#FFFFFF',
  },
  subViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    paddingLeft: 15,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 36,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
  },
  searchStyle: {
    width: 27,
    height: 26.5,
    tintColor: 'black',
  },
  arrowStyle: {
    width: 33,
    height: 31,
    tintColor: '#000000',
  },
});

export default Header;
