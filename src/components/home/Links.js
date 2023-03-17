import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Links = () => {
  const {viewStyle, textStyle, textStyle1} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity>
        <Text style={textStyle1}>ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={textStyle}>NOAH HOUSE</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={textStyle}>SONGS</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={textStyle}>EVENTS</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={textStyle}>SHOP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#000000',
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 500,
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 16,
    marginRight: 4,
  },
  textStyle1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 900,
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default Links;
