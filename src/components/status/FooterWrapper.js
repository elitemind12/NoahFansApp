import React from 'react';
import {StyleSheet, View} from 'react-native';
import FooterSegmentOne from './FooterSegmentOne';
import FooterSegmentTwo from './FooterSegmentTwo';

const FooterWrapper = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <FooterSegmentOne />
      <FooterSegmentTwo />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    height: '20%',
  },
});

export default FooterWrapper;
