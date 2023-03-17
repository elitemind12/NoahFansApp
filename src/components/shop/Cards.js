import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Card from './Card';

const Cards = () => {
  const image1 = {
    profile: require('../../assets/images/shirt.png'),
  };
  const image2 = {
    profile: require('../../assets/images/budha.png'),
  };
  const image3 = {
    profile: require('../../assets/images/bakery.png'),
  };
  const image4 = {
    profile: require('../../assets/images/ticket.png'),
  };
  const image5 = {
    profile: require('../../assets/images/meat.png'),
  };
  const image6 = {
    profile: require('../../assets/images/guiter.png'),
  };
  const {
    cardStyle,
    cardsStyle,
    profileViewStyle,
    contentsViewStyle,
    titleStyle,
    itemsWrapper,
    bodyViewStyle,
    itemsStyle,
    quantityStyle,
    buttonWrapper,
    profileStyle,
  } = styles;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={cardsStyle}>
        <Card
          cardStyle={cardStyle}
          image={image1}
          title="Clothing"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image2}
          title="Action Figure"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image3}
          title="Sempiternal Cake by Noah"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image4}
          title="Tickets"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image5}
          title="Geprek Noah"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image6}
          title="Music Gears"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image1}
          title="Clothing"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image2}
          title="Action Figure"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image3}
          title="Sempiternal Cake by Noah"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image4}
          title="Tickets"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image5}
          title="Geprek Noah"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image6}
          title="Music Gears"
          item="4 Grup"
          quantity="24 Item"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardsStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: '20%',
  },
  cardStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D0D0D1',
    borderRadius: 10,
    width: '100%',
    height: 86,
    padding: 20,
    marginBottom: 10,
  },
  profileViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 59,
    height: 59,
  },
  contentsViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'flex-start',
    marginLeft: 8,
  },
  titleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    padding: 4,
  },
  bodyViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 2,
    borderTopColor: '#D0D0D1',
    padding: 5,
  },
  itemsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemsStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#8A8A8A',
  },
  quantityStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#8A8A8A',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  profileStyle: {
    width: 59,
    height: 59,
  },
});

export default Cards;
