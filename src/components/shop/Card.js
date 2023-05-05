import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import MoreButton from '../home/MoreButton';
import {useNavigation} from '@react-navigation/native';

const Card = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShopGroup')}
      style={props.cardStyle}>
      <View style={props.profileViewStyle}>
        <Image style={props.profileStyle} source={props.image.profile} />
      </View>
      <View style={props.contentsViewStyle}>
        <Text style={props.titleStyle}>{props.title}</Text>
        <View style={props.bodyViewStyle}>
          <View style={props.itemsWrapper}>
            <Text style={props.itemsStyle}>{props.item}</Text>
            <Text style={props.quantityStyle}>{props.quantity}</Text>
          </View>
          <View style={props.buttonWrapper}>
            <MoreButton />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
