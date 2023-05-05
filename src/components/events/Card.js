import React from 'react';
import {View, Image, Text} from 'react-native';
import MoreButton from '../home/MoreButton';

const Card = props => {
  return (
    <View style={props.cardStyle}>
      <View style={props.profileViewStyle}>
        <Image style={props.profileStyle} source={props.image.profile} />
      </View>
      <View style={props.contentsViewStyle}>
        <View style={props.titleViewStyle}>
          <Text style={props.titleStyle}>{props.title}</Text>
          <Text style={props.titleStyle}>{props.title1}</Text>
        </View>
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
    </View>
  );
};

export default Card;
