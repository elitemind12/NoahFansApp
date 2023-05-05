import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Card from './Card';
import PostCard from './PostCard';

const Cards = () => {
  const image = {
    pic: require('../../assets/images/kenapa_1.png'),
    person1: require('../../assets/images/jonDoe.png'),
    person2: require('../../assets/images/Logo.png'),
  };
  const {
    viewStyle,
    postCardViewStyle,
    headerViewStyle,
    textHeaderWrapper,
    headerImageStyle,
    cardHeaderSection,
    cardHeaderSection1,
    cardViewStyle,
    cardCenterStyle,
    cardCenterImageStyle,
    footerViewStyle,
    cardLogoStyle,
    cardTextStyle,
    cardPlayButton,
    cardFooterText,
    buttonsStyle,
    buttonStyle,
    footerText,
    personTextStyle,
  } = styles;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={viewStyle}>
        <PostCard
          person1="John Doe"
          person2="Noah"
          date="22 Februari 2023"
          message="New Album is out!"
          image={image}
          postCardViewStyle={postCardViewStyle}
          headerViewStyle={headerViewStyle}
          textHeaderWrapper={textHeaderWrapper}
          headerImageStyle={headerImageStyle}
          cardHeaderSection={cardHeaderSection}
          cardHeaderSection1={cardHeaderSection1}
          cardViewStyle={cardViewStyle}
          cardCenterStyle={cardCenterStyle}
          cardCenterImageStyle={cardCenterImageStyle}
          footerViewStyle={footerViewStyle}
          cardLogoStyle={cardLogoStyle}
          cardTextStyle={cardTextStyle}
          cardPlayButton={cardPlayButton}
          cardFooterText={cardFooterText}
          buttonsStyle={buttonsStyle}
          buttonStyle={buttonStyle}
          footerText={footerText}
          personTextStyle={personTextStyle}
        />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
        <Card image={image} person1="John Doe" message="New Album is out!" />
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
  postCardViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: '#8A8A8A',
    borderWidth: 1.5,
    width: '100%',
    height: 300,
    borderRadius: 10,
    padding: 10,
    marginBottom: '3%',
  },
  headerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 36,
    color: '#000000',
    alignItems: 'center',
  },
  headerImageStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 32,
    height: 32,
  },
  cardViewStyle: {
    width: '100%',
    height: 175,
    borderRadius: 10,
    padding: 10,
    marginBottom: '3%',
    borderColor: '#8A8A8A',
    borderWidth: 1.5,
    marginTop: '5%',
  },
  cardHeaderSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderSection1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  cardCenterStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '3.5%',
  },
  cardCenterImageStyle: {
    width: '100%',
    height: 85,
    borderRadius: 10,
  },
  cardLogoStyle: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: '5%',
  },
  cardTextStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: 700,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '3%',
  },
  cardPlayButton: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: '40%',
    left: '45%',
    tintColor: 'white',
  },
  cardFooterText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 500,
    color: '#000000',
    display: 'flex',
    marginTop: 10,
  },
  buttonsStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: '2%',
  },
  buttonStyle: {
    marginLeft: '3%',
    height: 16,
    width: 16,
  },
  footerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 500,
    color: '#000000',
    marginLeft: '3%',
    display: 'flex',
  },
  footerViewStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  personTextStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 36,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default Cards;
