import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Card from './Card';

const Cards = () => {
  const image1 = {
    profile: require('../../assets/images/indonesia.png'),
  };
  const image2 = {
    profile: require('../../assets/images/indonesia.png'),
  };
  const image3 = {
    profile: require('../../assets/images/indonesia.png'),
  };
  const image4 = {
    profile: require('../../assets/images/tvshow.png'),
  };
  const image5 = {
    profile: require('../../assets/images/ftv.png'),
  };
  const image6 = {
    profile: require('../../assets/images/indonesia.png'),
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
    titleViewStyle,
  } = styles;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={cardsStyle}>
        <Card
          cardStyle={cardStyle}
          image={image1}
          title="TOUR OF INDONESIA"
          title1="Bandung"
          item="12 November 2022"
          quantity="Tickets Available"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image2}
          title="TOUR OF INDONESIA"
          title1="Solo"
          item="30 Desember 2022"
          quantity="SOLD OUT"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image3}
          title="TOUR OF INDONESIA"
          title1="Yogyakarta"
          item="11 January 2023"
          quantity="Tickets Available"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image4}
          title="Meet n’ Greet"
          title1="Jakarta"
          item="30 January 2023"
          quantity="Free Entry"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image5}
          title="TV Show"
          title1="Lapor Pak Trans 7"
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
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image6}
          title="FTV"
          title1="Trans TV"
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
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image1}
          title="TOUR OF INDONESIA"
          title1="Bandung"
          item="12 November 2022"
          quantity="Tickets Available"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image2}
          title="TOUR OF INDONESIA"
          title1="Solo"
          item="30 Desember 2022"
          quantity="SOLD OUT"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image3}
          title="TOUR OF INDONESIA"
          title1="Yogyakarta"
          item="11 January 2023"
          quantity="Tickets Available"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image4}
          title="Meet n’ Greet"
          title1="Jakarta"
          item="30 January 2023"
          quantity="Free Entry"
          profileViewStyle={profileViewStyle}
          contentsViewStyle={contentsViewStyle}
          titleStyle={titleStyle}
          itemsWrapper={itemsWrapper}
          bodyViewStyle={bodyViewStyle}
          itemsStyle={itemsStyle}
          quantityStyle={quantityStyle}
          buttonWrapper={buttonWrapper}
          profileStyle={profileStyle}
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image5}
          title="TV Show"
          title1="Lapor Pak Trans 7"
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
          titleViewStyle={titleViewStyle}
        />
        <Card
          cardStyle={cardStyle}
          image={image6}
          title="FTV"
          title1="Trans TV"
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
          titleViewStyle={titleViewStyle}
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
    padding: 10,
    marginBottom: 10,
  },
  profileViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
  },
  contentsViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    justifyContent: 'flex-start',
    marginLeft: 10,
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
    width: 75,
    height: 75,
    borderRadius: 6,
  },
  titleViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Cards;
