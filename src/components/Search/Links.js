import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Links = () => {
  const {parentViewStyle, textStyle, textBold} = styles;
  return (
    <View style={parentViewStyle}>
      <View>
        <Text style={textStyle}>SONGS</Text>
      </View>
      <View>
        <Text style={textBold}>FEEDS</Text>
      </View>
      <View>
        <Text style={textStyle}>EVENTS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    height: '5%',
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  textBold: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
});

export default Links;
