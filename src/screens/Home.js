import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Header from '../components/home/Header';
import ProfileSection from '../components/home/ProfileSection';
import Links from '../components/home/Links';
import Cards from '../components/home/Cards';
import Message from '../components/home/Message';
import Footer from '../components/home/Footer';

const Home = () => {
  const {containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Header />
      <ProfileSection />
      <Links />
      <Cards />
      <Message />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040404',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Home;
