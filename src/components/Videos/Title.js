import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Title = () => {
  const {viewStyle, buttonStyle, imageStyle, textStyle} = styles;
  const navigation = useNavigation();
  return (
    <View style={viewStyle}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/LineStroke.png')}
        />
      </TouchableOpacity>
      <Text style={textStyle}>Video/Music</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'center',
    height: '10%',
  },
  buttonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: 33,
    height: 31,
  },
  textStyle: {
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 36,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default Title;
