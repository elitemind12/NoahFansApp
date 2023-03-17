import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Card from './Card';

const Cards = () => {
  const image = {
    logo: require('../../assets/images/Logo2.png'),
    jewel: require('../../assets/images/jewel.png'),
  };
  const {
    cardsViewStyle,
    cardViewStyle,
    logoViewStyle,
    logoStyle,
    centerItemsWrapper,
    headerStyle,
    jewelViewStyle,
    jewelStyle,
    subscribersViewStyle,
    subscribersStyle,
    buttonViewStyle,
    buttonStyle,
    textButtonStyle,
    headerViewStyle,
    buttonStyle1,
    textButtonStyle1,
  } = styles;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={cardsViewStyle}>
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle1}
          textButtonStyle={textButtonStyle1}
          subscribers="2.3M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 22 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="4.2M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 21 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="2.3M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 20 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="12M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 18 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="2.3M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 22 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle1}
          textButtonStyle={textButtonStyle1}
          subscribers="2.3M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 22 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="4.2M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 21 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="2.3M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 20 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="12M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 18 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
        <Card
          cardViewStyle={cardViewStyle}
          logoStyle={logoStyle}
          logoViewStyle={logoViewStyle}
          centerItemsWrapper={centerItemsWrapper}
          headerStyle={headerStyle}
          jewelViewStyle={jewelViewStyle}
          jewelStyle={jewelStyle}
          subscribersViewStyle={subscribersViewStyle}
          subscribersStyle={subscribersStyle}
          buttonViewStyle={buttonViewStyle}
          buttonStyle={buttonStyle}
          textButtonStyle={textButtonStyle}
          subscribers="2.3M subscribers"
          subscribed="SUBSCRIBED"
          header="Noah 22 Februari 2023"
          image={image}
          headerViewStyle={headerViewStyle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardsViewStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '17%',
  },
  cardViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    height: 120,
    padding: 30,
    width: '100%',
  },
  logoViewStyle: {
    width: 69,
    height: 69,
    borderRadius: 50,
  },
  logoStyle: {
    width: 69,
    height: 69,
    borderRadius: 50,
  },
  centerItemsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  headerStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 19,
    fontWeight: 700,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  headerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 5,
  },
  jewelViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    width: 15.5,
    height: 14,
    marginBottom: 10,
  },
  jewelStyle: {
    width: 15.5,
    height: 14,
    marginRight: 5,
  },
  subscribersViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  subscribersStyle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 15,
    fontWeight: 500,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  buttonViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 74,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#BDBDBD',
  },
  textButtonStyle: {
    color: '#484848',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    lineHeight: 12,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonStyle1: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 74,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#484848',
  },
  textButtonStyle1: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    lineHeight: 12,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Cards;
