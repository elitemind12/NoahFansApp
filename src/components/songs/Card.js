import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Card = props => {
  return (
    <View style={props.cardStyle}>
      <View style={props.firstViewStyle}>
        <TouchableOpacity style={props.profileViewStyle}>
          <Image style={props.profileStyle} source={props.image.play} />
        </TouchableOpacity>
        <View style={props.textWrapperView}>
          <Text style={props.titleStyle}>{props.title}</Text>
          <Text style={props.mediaStyle}>{props.media}</Text>
        </View>
      </View>
      <View style={props.secondViewStyle}>
        <Text style={props.timeStyle}>{props.time}</Text>
      </View>
    </View>
  );
};

export default Card;
