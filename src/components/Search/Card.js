import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Card = props => {
  return (
    <View style={props.cardViewStyle}>
      <View style={props.logoViewStyle}>
        <Image style={props.logoStyle} source={props.image.logo} />
      </View>
      <View style={props.centerItemsWrapper}>
        <View style={props.headerViewStyle}>
          <Text style={props.headerStyle}>{props.header}</Text>
        </View>
        <View style={props.jewelViewStyle}>
          <Image style={props.jewelStyle} source={props.image.jewel} />
          <Image style={props.jewelStyle} source={props.image.jewel} />
          <Image style={props.jewelStyle} source={props.image.jewel} />
          <Image style={props.jewelStyle} source={props.image.jewel} />
          <Image style={props.jewelStyle} source={props.image.jewel} />
        </View>
        <View style={props.subscribersViewStyle}>
          <Text style={props.subscribersStyle}>{props.subscribers}</Text>
        </View>
      </View>
      <View style={props.buttonViewStyle}>
        <TouchableOpacity style={props.buttonStyle}>
          <Text style={props.textButtonStyle}>{props.subscribed}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
