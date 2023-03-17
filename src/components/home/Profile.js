import React from 'react';
import {View, Image, Text} from 'react-native';

const Profile = props => {
  return (
    <View style={props.profileViewStyle}>
      <Image style={props.imageViewStyle} source={props.image.person} />
      <View style={props.iconViewStyle}>
        <Image style={props.iconStyle} source={props.image.plus} />
      </View>
      <View style={props.statusView}>
        <Text style={props.statusText}>{props.status}</Text>
      </View>
      <Text style={props.textProfileStyle}>{props.title}</Text>
    </View>
  );
};

export default Profile;
