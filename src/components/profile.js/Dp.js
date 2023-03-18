import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Dp = () => {
  const {containerStyle, sectionStyle, textStyle, numberStyle, sectionStyle1} =
    styles;
  return (
    <View style={containerStyle}>
      <View style={sectionStyle}>
        <Text style={textStyle}>POSTS</Text>
        <Text style={numberStyle}>12</Text>
      </View>
      <View style={sectionStyle1}>
        <Text style={textStyle}>FOLLOWERS</Text>
        <Text style={numberStyle}>42</Text>
      </View>
      <View style={sectionStyle}>
        <Text style={textStyle}>FOLLOWING</Text>
        <Text style={numberStyle}>12</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    borderTopColor: '#8A8A8A',
    borderTopWidth: 2,
    marginBottom: 10,
    marginTop: -18,
  },
  sectionStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  sectionStyle1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#8A8A8A',
    borderRightColor: '#8A8A8A',
    height: '100%',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 15,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  numberStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 18,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default Dp;
