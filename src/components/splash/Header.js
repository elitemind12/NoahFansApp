import React from 'react';
import {StyleSheet, View} from 'react-native';
import SubHeader from './SubHeader';

const Header = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <SubHeader title={'WEL'} />
      <SubHeader title={'COME'} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 260,
    height: 139,
  },
});

export default Header;
