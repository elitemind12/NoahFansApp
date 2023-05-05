import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const {
    containerViewStyle,
    arrowStyle,
    profileViewStyle,
    profileStyle,
    contentWrapperView,
    titleStyle,
    viewsWrapperStyle,
    viewsTextStyle,
    viewsImageStyle,
  } = styles;
  const navigation = useNavigation();
  return (
    <View style={containerViewStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={arrowStyle}
          source={require('../../assets/images/v.png')}
        />
      </TouchableOpacity>
      <View style={profileViewStyle}>
        <Image
          style={profileStyle}
          source={require('../../assets/images/Admin.png')}
        />
      </View>
      <View style={contentWrapperView}>
        <Text style={titleStyle}>Official Admin NOAH</Text>
        <View style={viewsWrapperStyle}>
          <Image
            style={viewsImageStyle}
            source={require('../../assets/images/view.png')}
          />
          <Text style={viewsTextStyle}>1324</Text>
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
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    height: '10%',
  },
  arrowStyle: {
    width: 12,
    height: 16,
  },
  profileViewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 43,
    height: 43,
    borderRadius: 50,
    marginLeft: '5%',
  },
  profileStyle: {
    width: 43,
    height: 43,
    borderRadius: 50,
  },
  contentWrapperView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
  },
  titleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 16,
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
  },
  viewsWrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
  },
  viewsImageStyle: {
    width: 12,
    height: 9,
  },
  viewsTextStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 8,
    fontWeight: 500,
    lineHeight: 8,
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '3%',
  },
});

export default Header;
