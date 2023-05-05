import React from 'react';
import {View, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import Header from '../components/chats/Header';
import Footer from '../components/chats/Footer';
import ConvoList from '../components/chats/ConvoList';

const Chat = () => {
  const {viewStyle, imageBackground} = styles;
  return (
    <View style={viewStyle}>
      <ImageBackground
        style={imageBackground}
        source={require('../assets/images/chat.png')}>
        <Header />
        <ConvoList />
        <Footer />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Chat;
