import React from 'react';
import {Text, StyleSheet} from 'react-native';

const GroupTitle = props => {
  const {textStyle} = styles;
  return <Text style={textStyle}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    marginTop: '5%',
  },
});

export default GroupTitle;
