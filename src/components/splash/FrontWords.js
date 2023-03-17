import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FrontWords = () => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        rhoncus mauris.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 12.89,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '30%',
  },
});

export default FrontWords;
