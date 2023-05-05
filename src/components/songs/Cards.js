import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';

const Cards = () => {
  const {
    cardStyle,
    cardsStyle,
    firstViewStyle,
    secondViewStyle,
    profileViewStyle,
    profileStyle,
    textWrapperView,
    titleStyle,
    mediaStyle,
    timeStyle,
  } = styles;
  const profile1 = {
    play: require('../../assets/images/Play03.png'),
  };
  return (
    <View style={cardsStyle}>
      <Card
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile1}
        title="1. Crucify Me"
        media="4:46"
        time="2.093.944"
      />
      <Card
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile1}
        title="2. It Never Ends"
        media="3:37"
        time="1.463.547"
      />
      <Card
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile1}
        title="3. Fuck"
        media="5:27"
        time="1.312.463"
      />
      <Card
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile1}
        title="4. Don’t Go"
        media="3:47"
        time="503.033"
      />
      <Card
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile1}
        title="5. Memorial/Blessed with a Curse"
        media="6:46"
        time="3.345.134"
      />
      <Card
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile1}
        title="6. Blessed with a Curse"
        media="5:05"
        time="23.049.123"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: '60%',
    paddingHorizontal: 30,
    width: '100%',
  },
  cardStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '12%',
    borderTopColor: '#000000',
    borderTopWidth: 0.5,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
  },
  firstViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  secondViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 13,
    height: 16,
  },
  profileStyle: {
    width: 13,
    height: 16,
  },
  textWrapperView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  titleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 16,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  mediaStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 16,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
  timeStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 16,
    color: '#8A8A8A',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'right',
  },
});

export default Cards;
