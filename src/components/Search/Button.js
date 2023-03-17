import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={props.style}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
