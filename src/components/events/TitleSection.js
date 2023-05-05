import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const TitleSection = () => {
  const {
    SecondViewStyle,
    textStyle,
    imageWrapper,
    image,
    LogoItemsView,
    logoStyle,
    containerViewStyle,
  } = styles;
  return (
    <View style={containerViewStyle}>
      <View style={LogoItemsView}>
        <Image
          style={logoStyle}
          source={require('../../assets/images/Logo2.png')}
        />
      </View>
      <View style={SecondViewStyle}>
        <Text style={textStyle}>Noah</Text>
        <View style={imageWrapper}>
          <Image
            style={image}
            source={require('../../assets/images/jewel.png')}
          />
          <Image
            style={image}
            source={require('../../assets/images/jewel.png')}
          />
          <Image
            style={image}
            source={require('../../assets/images/jewel.png')}
          />
          <Image
            style={image}
            source={require('../../assets/images/jewel.png')}
          />
          <Image
            style={image}
            source={require('../../assets/images/jewel.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    height: '10%',
    paddingTop: 30,
    width: '100%',
    paddingHorizontal: 20,
    // borderBottomColor: '#D0D0D1',
    // borderBottomWidth: 5,
  },
  LogoItemsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  logoStyle: {
    width: 73,
    height: 73,
    borderRadius: 50,
  },
  SecondViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 5,
    width: 15.5,
    height: 14,
  },
  image: {
    width: 15.5,
    height: 14,
    marginRight: 5,
  },
});

export default TitleSection;
