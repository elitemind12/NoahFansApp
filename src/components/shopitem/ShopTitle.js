import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShopTitle = () => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Noah Blood Lust Tee</Text>
      <Text style={textStyle}>$120</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    height: '5%',
    marginTop: '3%',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 24,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default ShopTitle;
