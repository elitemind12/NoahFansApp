import React from 'react';
import {StyleSheet, View} from 'react-native';
import Profile from './Profile';

const ProfileSection = () => {
  const {
    viewStyle,
    profileViewStyle,
    imageViewStyle,
    iconViewStyle,
    iconStyle,
    textProfileStyle,
    iconStyle1,
    iconViewStyle1,
    imageViewStyle1,
    statusText,
    statusView,
    statusView1,
  } = styles;
  const image1 = {
    person: require('../../assets/images/person1.png'),
    plus: require('../../assets/images/+.png'),
  };
  const image2 = {
    person: require('../../assets/images/person2.png'),
    plus: require('../../assets/images/ellipse.png'),
  };
  const image3 = {
    person: require('../../assets/images/person3.png'),
    plus: require('../../assets/images/ellipse.png'),
  };
  return (
    <View style={viewStyle}>
      <Profile
        profileViewStyle={profileViewStyle}
        imageViewStyle={imageViewStyle}
        iconViewStyle={iconViewStyle}
        iconStyle={iconStyle}
        textProfileStyle={textProfileStyle}
        image={image1}
        title="You(Alvin)"
        statusView={statusView1}
      />
      <Profile
        profileViewStyle={profileViewStyle}
        imageViewStyle={imageViewStyle}
        iconViewStyle={iconViewStyle1}
        iconStyle={iconStyle1}
        textProfileStyle={textProfileStyle}
        image={image2}
        statusView={statusView1}
        title="MandaManda"
      />
      <Profile
        profileViewStyle={profileViewStyle}
        imageViewStyle={imageViewStyle1}
        iconViewStyle={iconViewStyle1}
        iconStyle={iconStyle1}
        textProfileStyle={textProfileStyle}
        image={image3}
        title="Official Admin NOAH"
        status="LIVE"
        statusText={statusText}
        statusView={statusView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    backgroundColor: '#484848',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  profileViewStyle: {
    marginLeft: '7%',
    marginVertical: '7%',
    width: 64,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  profileViewStyle1: {
    marginLeft: '7%',
    marginVertical: '7%',
    width: 64,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  imageViewStyle: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  imageViewStyle1: {
    borderColor: '#0BA4D4',
    borderWidth: 1.8,
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  iconViewStyle: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    left: 41,
    top: 46,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  iconStyle: {
    height: 9,
    width: 9,
  },
  iconViewStyle1: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
    left: 46,
    top: 52,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  iconStyle1: {
    height: 12,
    width: 12,
  },
  textProfileStyle: {
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: 8,
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: 8,
  },
  statusView: {
    position: 'absolute',
    width: 30,
    height: 9,
    top: 57,
    left: 17,
    backgroundColor: '#0BA4D4',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  statusView1: {
    position: 'absolute',
    width: 30,
    height: 9,
    top: 57,
    left: 17,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  statusText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 6,
    fontWeight: 700,
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 8,
  },
});

export default ProfileSection;
