import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Rectangle from './Rectangle';

const Size = () => {
  const {
    containerViewStyle,
    firstViewStyle,
    secondViewStyle,
    sizeViewStyle,
    sizeStyle,
    qtyViewStyle,
    qtyStyle,
    rectOne,
    rectTwo,
  } = styles;
  return (
    <View style={containerViewStyle}>
      <View style={firstViewStyle}>
        <Text style={sizeStyle}>Size</Text>
        <View style={sizeViewStyle}>
          <Rectangle style={rectOne} title="S" />
          <Rectangle style={rectOne} title="M" />
          <Rectangle style={rectOne} title="L" />
          <Rectangle style={rectOne} title="XL" />
          <Rectangle style={rectOne} title="XXL" />
        </View>
      </View>
      <View style={secondViewStyle}>
        <Text style={qtyStyle}>Qty</Text>
        <View style={qtyViewStyle}>
          <Rectangle style={rectTwo} title="-" />
          <Rectangle style={rectTwo} title="1" />
          <Rectangle style={rectTwo} title="+" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    height: '20%',
    width: '100%',
    marginTop: '3%',
  },
  firstViewStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  secondViewStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  sizeViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  sizeStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 16,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 2,
  },
  qtyViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  qtyStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 16,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 2,
  },
});

export default Size;
