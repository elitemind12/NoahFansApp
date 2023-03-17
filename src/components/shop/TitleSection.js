import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TitleSection = () => {
  const navigation = useNavigation();
  const {
    firstItemsView,
    secondItemsView,
    viewStyle,
    arrowStyle,
    textStyle,
    arrowButtonStyle,
    logoStyle,
  } = styles;
  return (
    <View style={viewStyle}>
      <View style={firstItemsView}>
        <TouchableOpacity
          style={arrowButtonStyle}
          onPress={() => navigation.navigate('Home')}>
          <Image
            style={arrowStyle}
            source={require('../../assets/images/LineStroke.png')}
          />
        </TouchableOpacity>
        <Text style={textStyle}>Shop</Text>
      </View>
      <View style={secondItemsView}>
        <Image
          style={logoStyle}
          source={require('../../assets/images/ambrella.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 60,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '15%',
  },
  firstItemsView: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  secondItemsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  arrowButtonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  arrowStyle: {
    width: 33,
    height: 31,
  },
  logoStyle: {
    width: 73,
    height: 73,
    borderRadius: 50,
  },
  textStyle: {
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 36,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
  },
});

export default TitleSection;
