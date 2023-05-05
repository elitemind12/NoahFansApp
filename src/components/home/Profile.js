import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Profile = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={props.profileViewStyle}
      onPress={() => navigation.navigate('Status')}>
      <Image style={props.imageViewStyle} source={props.image.person} />
      <View style={props.iconViewStyle}>
        <Image style={props.iconStyle} source={props.image.plus} />
      </View>
      <View style={props.statusView}>
        <Text style={props.statusText}>{props.status}</Text>
      </View>
      <Text style={props.textProfileStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Profile;
