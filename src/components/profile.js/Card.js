import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Button from './Button';
import MoreButton from '../home/MoreButton';

const Card = props => {
  const {
    viewStyle,
    headerSection,
    logoStyle,
    textStyle,
    centerStyle,
    centerImageStyle,
    playButton,
    buttonsStyle,
    buttonStyle,
    footerText,
    headerSection1,
  } = styles;
  const like = {
    icon: require('../../assets/images/like.png'),
  };
  const message = {
    icon: require('../../assets/images/message.png'),
  };
  const share = {
    icon: require('../../assets/images/share.png'),
  };
  return (
    <View style={viewStyle}>
      <View style={headerSection}>
        <View style={headerSection1}>
          <Image
            style={logoStyle}
            source={require('../../assets/images/jonDoe.png')}
          />
          <Text style={textStyle}>Noah</Text>
          <Text style={textStyle}>22 Februari 2023</Text>
        </View>
        <MoreButton />
      </View>
      <View style={centerStyle}>
        <Image style={centerImageStyle} source={props.image.pic} />
        <TouchableOpacity style={playButton}>
          <Image source={require('../../assets/images/PLAYLIST.png')} />
        </TouchableOpacity>
      </View>
      <View style={buttonsStyle}>
        <Button buttonStyle={buttonStyle} image={like} />
        <Button buttonStyle={buttonStyle} image={message} />
        <Button buttonStyle={buttonStyle} image={share} />
      </View>
      <View>
        <Text style={footerText}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 220,
    borderRadius: 10,
    padding: '3%',
    marginBottom: '3%',
    borderColor: '#8A8A8A',
    borderWidth: 1.5,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerSection1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  logoStyle: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: '5%',
  },
  textStyle: {
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
  centerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '3.5%',
  },
  centerImageStyle: {
    width: '100%',
    height: 85,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: '40%',
    left: '45%',
    tintColor: 'white',
  },
  buttonsStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '6%',
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
});

export default Card;
