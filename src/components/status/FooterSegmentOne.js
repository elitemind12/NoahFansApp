import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const FooterSegmentOne = () => {
  const {containerViewStyle, profileViewStyle, profileStyle, textStyle} =
    styles;
  return (
    <View style={containerViewStyle}>
      <View style={profileViewStyle}>
        <Image
          style={profileStyle}
          source={require('../../assets/images/manda.png')}
        />
      </View>
      <Text style={textStyle}>Wah keren banget..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  profileViewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 43,
    height: 43,
    borderRadius: 50,
  },
  profileStyle: {
    width: 43,
    height: 43,
    borderRadius: 50,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '3%',
  },
});

export default FooterSegmentOne;
