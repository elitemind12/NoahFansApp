import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Input from './Input';
import CardFront from './CardFront';
import Button from './Button';

const Form = () => {
  const {
    ShortInputStyle,
    cardName,
    CardNumber,
    cardFront,
    firstName,
    lastName,
    Month,
    Year,
    CVC,
    formStyle,
    centerInputs,
    footerInputs,
  } = styles;
  return (
    <View style={formStyle}>
      <View style={cardName}>
        <Input placeholder="Give this card a name" />
      </View>
      <View style={cardFront}>
        <CardFront />
      </View>
      <View style={centerInputs}>
        <View style={firstName}>
          <Input InputStyle={ShortInputStyle} placeholder="Name on card" />
        </View>
        <View style={lastName}>
          <Input InputStyle={ShortInputStyle} placeholder="Surname on card" />
        </View>
      </View>
      <View style={CardNumber}>
        <Input secureTextEntry={true} placeholder="Card number" />
        <Image source={require('../../assets/images/Mastercard.png')} />
      </View>
      <View style={footerInputs}>
        <View style={Month}>
          <Input placeholder="Month" />
          <Image source={require('../../assets/images/CaretDown.png')} />
        </View>
        <View style={Year}>
          <Input placeholder="Year" />
          <Image source={require('../../assets/images/CaretDown.png')} />
        </View>
        <View style={CVC}>
          <Input placeholder="CVC" />
          <Image source={require('../../assets/images/WarningCircle.png')} />
        </View>
      </View>
      <Button />
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
  cardName: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
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
  cardFront: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginBottom: '7%',
  },
  firstName: {
    width: '46.75%',
  },
  lastName: {
    width: '46.75%',
    marginLeft: '2.5%',
  },
  centerInputs: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '7%',
  },
  footerInputs: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20%',
  },
  Month: {
    width: '30%',
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
  },
  Year: {
    width: '30%',
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
    marginLeft: '2.5%',
  },
  CVC: {
    width: '30%',
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
    marginLeft: '2.5%',
  },
  CardNumber: {
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
});

export default Form;
