import React from 'react';
import {StyleSheet, View} from 'react-native';
import ForYouCard from './ForYouCard';

const ForYouCards = () => {
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
    profile: require('../../assets/images/pro1.png'),
  };
  const profile2 = {
    profile: require('../../assets/images/pro.png'),
  };
  return (
    <View style={cardsStyle}>
      <ForYouCard
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
        title="Taman Langit"
        media="Videos"
        time="3:40"
      />
      <ForYouCard
        cardStyle={cardStyle}
        firstViewStyle={firstViewStyle}
        secondViewStyle={secondViewStyle}
        profileViewStyle={profileViewStyle}
        profileStyle={profileStyle}
        textWrapperView={textWrapperView}
        titleStyle={titleStyle}
        mediaStyle={mediaStyle}
        timeStyle={timeStyle}
        image={profile2}
        title="Hari yang Cerah"
        media="Music"
        time="3:40"
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
    height: '16%',
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
    height: '50%',
    marginBottom: 3,
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
    width: 55,
    height: 55,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8A8A8A',
  },
  profileStyle: {
    width: 55,
    height: 55,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8A8A8A',
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

export default ForYouCards;
