import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TrendingTitle = () => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Trending</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: '10%',
  },
  textStyle: {
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

export default TrendingTitle;
