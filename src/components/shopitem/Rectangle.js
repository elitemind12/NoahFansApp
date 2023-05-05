import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Rectangle = props => {
  const {viewStyle, textStyle} = styles;
  return (
    <TouchableOpacity style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    marginRight: 2,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 16,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default Rectangle;
