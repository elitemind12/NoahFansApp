import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const TitleSection = () => {
  const {viewStyle, profileStyle, imageStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <View style={profileStyle}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/jonDoe.png')}
        />
      </View>
      <Text style={textStyle}>Jono Doe Asli</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: '15%',
    width: '100%',
  },
  profileStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  imageStyle: {
    width: 73,
    height: 73,
    borderRadius: 50,
  },
  textStyle: {
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 36,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default TitleSection;
