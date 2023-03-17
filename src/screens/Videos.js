import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Header from '../components/Videos/Header';
import Title from '../components/Videos/Title';
import ForYouTitle from '../components/Videos/ForYouTitle';
import ForYouCards from '../components/Videos/ForYouCards';
import TrendingTitle from '../components/Videos/TrendingTitle';
import TrendingCards from '../components/Videos/TrendingCards';
import Footer from '../components/Search/Footer';
import PlayListTitle from '../components/Videos/PlayListTitle';
import PlayListCards from '../components/Videos/PlayListCards';

const Videos = () => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Header />
      <Title />
      <ForYouTitle />
      <ForYouCards />
      <TrendingTitle />
      <TrendingCards />
      <PlayListTitle />
      <PlayListCards />
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

export default Videos;
