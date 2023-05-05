import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const FooterSegmentTwo = () => {
  const {
    containerViewStyle,
    profileStyle,
    profileViewStyle,
    InputViewStyle,
    loveStyle,
    inputStyle,
  } = styles;
  return (
    <View style={containerViewStyle}>
      <View style={profileViewStyle}>
        <Image
          style={profileStyle}
          source={require('../../assets/images/leNoah.png')}
        />
      </View>
      <View style={InputViewStyle}>
        <TextInput style={inputStyle} placeholder="Send message" />
      </View>
      <TouchableOpacity>
        <Image
          style={loveStyle}
          source={require('../../assets/images/love2.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  profileViewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 43,
    height: 43,
    borderRadius: 50,
  },
  profileStyle: {
    width: 43,
    height: 43,
    borderRadius: 50,
  },
  InputViewStyle: {
    height: 38,
    borderWidth: 1,
    borderColor: '#D2D5DA',
    borderRadius: 20,
    paddingLeft: '4%',
    paddingRight: '4%',
    width: '70%',
  },
  loveStyle: {
    width: 24,
    height: 20,
  },
  inputStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
  },
});

export default FooterSegmentTwo;
