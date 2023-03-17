import React from 'react';
import {View, Text, Image} from 'react-native';

const PlayListCard = props => {
  return (
    <View style={props.cardStyle}>
      <View style={props.firstViewStyle}>
        <View style={props.profileViewStyle}>
          <Image style={props.profileStyle} source={props.image.play} />
        </View>
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

export default PlayListCard;
