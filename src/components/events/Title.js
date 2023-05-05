import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = props => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    textAlign: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    height: '10%',
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

export default Title;
