import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Header from '../components/Videos/Header';
import TitleSection from '../components/profile.js/TitleSection';
import Dp from '../components/profile.js/Dp';
import Cards from '../components/profile.js/Cards';
import Footer from '../components/Search/Footer';

const Profile = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <TitleSection />
      <Dp />
      <Cards />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Profile;
