import React from 'react';
import {StyleSheet, View} from 'react-native';
import TrendingCard from './TrendingCard';

const TrendingCards = () => {
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
      <TrendingCard
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
        title="Golden Days"
        media="Panic! At The Disco"
        time="3:40"
      />
      <TrendingCard
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
        title="Infected"
        media="Bad Religion"
        time="4:10"
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
    height: '18%',
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
    height: '40%',
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

export default TrendingCards;
