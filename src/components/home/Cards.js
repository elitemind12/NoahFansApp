import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Card from './Card';

const Cards = () => {
  const {viewStyle} = styles;
  const image = {
    pic: require('../../assets/images/kenapa_1.png'),
  };
  const image2 = {
    pic: require('../../assets/images/kenapa_2.png'),
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={viewStyle}>
        <Card image={image} message="New Album is out!" />
        <Card
          image={image2}
          message="We’ll rockin’ Austin, TX. on July.
Presale Tickets available."
        />
        <Card image={image} message="New Album is out!" />
        <Card image={image} message="New Album is out!" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3%',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    marginBottom: '17%',
  },
});

export default Cards;
