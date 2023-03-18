import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
      <Image source={props.image.icon} />
    </TouchableOpacity>
  );
};

export default Button;
