import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SubHeader = props => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
    fontWeight: 800,
    fontSize: 65,
    lineHeight: 76.17,
    color: '#FFFFFF',
  },
});

export default SubHeader;
