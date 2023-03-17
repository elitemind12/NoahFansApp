import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

const ListButton = () => {
  const {
    containerStyle,
    reactangleTwoView,
    reactangleOneView,
    reactangleOne,
    reactangleTwo,
  } = styles;
  return (
    <TouchableOpacity style={containerStyle}>
      <View style={reactangleOneView}>
        <Image
          style={reactangleOne}
          source={require('../../assets/images/Rectangle72.png')}
        />
        <Image
          style={reactangleOne}
          source={require('../../assets/images/Rectangle72.png')}
        />
        <Image
          style={reactangleOne}
          source={require('../../assets/images/Rectangle72.png')}
        />
      </View>
      <View style={reactangleTwoView}>
        <Image
          style={reactangleTwo}
          source={require('../../assets/images/Rectangle75.png')}
        />
        <Image
          style={reactangleTwo}
          source={require('../../assets/images/Rectangle75.png')}
        />
        <Image
          style={reactangleTwo}
          source={require('../../assets/images/Rectangle75.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    width: 19,
    height: 16,
    // marginRight: '3%',
  },
  rectangleOneView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  reactangleTwoView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 3,
  },
  reactangleOne: {
    width: 4,
    height: 4,
    tintColor: '#8A8A8A',
    marginBottom: 2.5,
  },
  reactangleTwo: {
    width: 13,
    height: 2,
    backgroundColor: '#8A8A8A',
    borderRadius: 1,
  },
});

export default ListButton;
