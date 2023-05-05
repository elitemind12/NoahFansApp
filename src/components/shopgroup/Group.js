import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Group = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShopItem')}
      style={props.groupStyle}>
      <View style={props.profileViewStyle}>
        <Image style={props.profileStyle} source={props.image.pic} />
      </View>
      <View style={props.contentStyle}>
        <View style={props.nameViewStyle}>
          <Text style={props.nameStyle}>{props.name}</Text>
        </View>
        <View style={props.priceViewStyle}>
          <Text style={props.priceStyle}>{props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Group;
