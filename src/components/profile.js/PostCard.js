import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Button from './Button';
import MoreButton from '../home/MoreButton';

const postCard = props => {
  const like = {
    icon: require('../../assets/images/like.png'),
  };
  const message = {
    icon: require('../../assets/images/message.png'),
  };
  const share = {
    icon: require('../../assets/images/share.png'),
  };
  return (
    <View style={props.postCardViewStyle}>
      <View style={props.headerViewStyle}>
        <Image style={props.headerImageStyle} source={props.image.person1} />
        <View style={props.textHeaderWrapper}>
          <Text style={props.personTextStyle}>{props.person1} </Text>
          <Text>Shared</Text>
          <Text style={props.personTextStyle}> {props.person2} </Text>
          <Text>Post</Text>
        </View>
      </View>
      <View style={props.cardViewStyle}>
        <View style={props.cardHeaderSection}>
          <View style={props.cardHeaderSection1}>
            <Image style={props.cardLogoStyle} source={props.image.person2} />
            <Text style={props.cardTextStyle}>{props.person2}</Text>
            <Text style={props.cardTextStyle}>{props.date}</Text>
          </View>
          <MoreButton />
        </View>
        <View style={props.cardCenterStyle}>
          <Image style={props.cardCenterImageStyle} source={props.image.pic} />
          <TouchableOpacity style={props.cardPlayButton}>
            <Image source={require('../../assets/images/PLAYLIST.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={props.cardFooterText}>{props.message}</Text>
        </View>
      </View>
      <View style={props.footerViewStyle}>
        <View style={props.buttonsStyle}>
          <Button buttonStyle={props.buttonStyle} image={like} />
          <Button buttonStyle={props.buttonStyle} image={message} />
          <Button buttonStyle={props.buttonStyle} image={share} />
        </View>
        <View>
          <Text style={props.footerText}>{props.message}</Text>
        </View>
      </View>
    </View>
  );
};

export default postCard;
