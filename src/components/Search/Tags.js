/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from './Button';
import ListButton from './ListButton';

const Tags = () => {
  const {
    containerStyle,
    buttonStyle,
    textStyle,
    buttonStyle1,
    textStyle1,
    containerStyle1,
  } = styles;
  return (
    <View style={containerStyle1}>
      <ListButton />
      <ScrollView contentContainerStyle={{flexGrow: 1}} horizontal={true}>
        <View style={containerStyle}>
          <Button title="Metal" style={buttonStyle1} textStyle={textStyle1} />
          <Button title="Rock" style={buttonStyle} textStyle={textStyle} />
          <Button title="Pop" style={buttonStyle} textStyle={textStyle} />
          <Button title="Reggae" style={buttonStyle} textStyle={textStyle} />
          <Button title="Hip Hop" style={buttonStyle} textStyle={textStyle} />
          <Button title="Punk" style={buttonStyle} textStyle={textStyle} />
          <Button title="Jazz" style={buttonStyle} textStyle={textStyle} />
          <Button title="Blues" style={buttonStyle} textStyle={textStyle} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    paddingVertical: 20,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',
  },
  containerStyle1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 30,
  },
  buttonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#BDBDBD',
    width: 74,
    height: 22,
    marginLeft: 4,
  },
  buttonStyle1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#484848',
    width: 74,
    height: 22,
    // marginLeft: '2%',
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#484848',
  },
  textStyle1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Tags;
