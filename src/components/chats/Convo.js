import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Convo = props => {
  const {
    containerViewStyle,
    profileViewStyle,
    profileStyle,
    secondViewStyle,
    profileTextStyle,
    thirdViewStyle,
    fourthViewStyle,
    messageTextStyle,
    timeTextStyle,
    timeViewStyle,
  } = styles;
  return (
    <View style={containerViewStyle}>
      <View style={profileViewStyle}>
        <Image style={profileStyle} source={props.image.profile} />
      </View>
      <View style={secondViewStyle}>
        <Text style={profileTextStyle}>{props.title}</Text>
        <View style={thirdViewStyle}>
          <View style={fourthViewStyle}>
            <Text style={messageTextStyle}>{props.message}</Text>
          </View>
          <View style={timeViewStyle}>
            <Text style={timeTextStyle}>10.23</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10%',
    width: '100%',
  },
  profileStyle: {
    width: 37,
    height: 37,
    borderRadius: 50,
  },
  secondViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3%',
  },
  profileTextStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    marginBottom: '3%',
  },
  thirdViewStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  fourthViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 10,
    width: 134,
    paddingVertical: 5,
  },
  messageTextStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  timeTextStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 6,
    lineHeight: 8,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
  },
  timeViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: '3%',
  },
  profileViewStyle: {
    width: 37,
    height: 37,
    backgroundColor: '#C4C4C4',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
  },
});

export default Convo;
