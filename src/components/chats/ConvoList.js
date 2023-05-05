import React from 'react';
import {View, StyleSheet} from 'react-native';
import Convo from './Convo';

const ConvoList = () => {
  const image1 = {
    profile: require('../../assets/images/manda.png'),
  };
  const image2 = {
    profile: require('../../assets/images/Singinh.png'),
  };
  const image3 = {
    profile: require('../../assets/images/Admin.png'),
  };
  // const image4 = {
  //   profile: require('../../assets/images/tvshow.png'),
  // };
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Convo
        title="Manda"
        message="Halo semuanyaa...!"
        time="10.23"
        image={image1}
      />
      <Convo
        title="Singgih"
        message="Halo, manda!"
        time="10.24"
        image={image2}
      />
      <Convo
        title="Official Admin"
        message="Halo, manda!
See you soon all "
        time="10.24"
        image={image3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    marginTop: '30%',
    // marginBottom: '20%',
  },
});

export default ConvoList;
