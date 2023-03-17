import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Input from './Input';
import ModalDropdown from 'react-native-modal-dropdown';

const Form = () => {
  const {
    ShortInputStyle,
    firstName,
    Password,
    City,
    Map,
    lastName,
    Email,
    BirthDate,
    nationality,
    frontInput,
    formStyle,
  } = styles;
  return (
    <View style={formStyle}>
      <View style={frontInput}>
        <View style={firstName}>
          <Input placeholder="Your name" InputStyle={ShortInputStyle} />
        </View>
        <View style={lastName}>
          <Input placeholder="Your last name" InputStyle={ShortInputStyle} />
        </View>
      </View>
      <View style={Email}>
        <Input placeholder="yourmail@gmail.com" />
        <Image source={require('../../assets/images/Envelope.png')} />
      </View>
      <View style={Password}>
        <Input placeholder="Enter your password" secureTextEntry={true} />
        <Image source={require('../../assets/images/Eye.png')} />
      </View>
      <View style={City}>
        <View style={Map}>
          <Image source={require('../../assets/images/map.png')} />
          <Input placeholder="select city" />
        </View>
        <Image source={require('../../assets/images/CaretDown.png')} />
      </View>
      <View style={BirthDate}>
        <ModalDropdown options={['option 1', 'option 2']} />
        <Image source={require('../../assets/images/CalendarBlank.png')} />
      </View>
      <View style={nationality}>
        <Input placeholder="Your nationality" />
        <Image source={require('../../assets/images/CaretDown.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ShortInputStyle: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 8,
    paddingLeft: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#6C727F',
  },
  firstName: {
    width: '45%',
  },
  lastName: {
    width: '45%',
    marginLeft: '5%',
  },
  frontInput: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '7%',
  },
  Email: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 8,
    paddingLeft: '4%',
    paddingRight: '4%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#6C727F',
    marginBottom: '7%',
  },
  Password: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 8,
    paddingLeft: '4%',
    paddingRight: '4%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#6C727F',
    marginBottom: '7%',
  },
  City: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 8,
    paddingLeft: '4%',
    paddingRight: '4%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#6C727F',
    marginBottom: '7%',
  },
  Map: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BirthDate: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 8,
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#6C727F',
    marginBottom: '7%',
  },
  nationality: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 8,
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#6C727F',
    marginBottom: '10%',
  },
});

export default Form;
