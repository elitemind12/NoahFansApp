import React from 'react';
import {TextInput} from 'react-native';

const Input = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={props.InputStyle}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default Input;
