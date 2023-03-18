import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Card from './Card';

const Cards = () => {
  const image = {
    pic: require('../../assets/images/kenapa_1.png'),
  };
  const {viewStyle} = styles;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={viewStyle}>
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '17%',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
});

export default Cards;
