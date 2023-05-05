import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Group from './Group';
import GroupTitle from './GroupTitle';

const Groups = () => {
  const {
    viewStyle,
    groupStyle,
    groupsStyle,
    profileStyle,
    profileViewStyle,
    nameStyle,
    nameViewStyle,
    priceViewStyle,
    priceStyle,
    contentStyle,
  } = styles;
  const image = {
    pic: require('../../assets/images/shirt1.png'),
  };
  const image2 = {
    pic: require('../../assets/images/shirt2.png'),
  };
  const image3 = {
    pic: require('../../assets/images/shirt3.png'),
  };
  const image4 = {
    pic: require('../../assets/images/shirt4.png'),
  };
  const image5 = {
    pic: require('../../assets/images/shirt5.png'),
  };
  const image6 = {
    pic: require('../../assets/images/shirt6.png'),
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={viewStyle}>
        <GroupTitle title="T-Shirt" />
        <View style={groupsStyle}>
          <Group
            image={image}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$100"
          />
          <Group
            image={image2}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Blood Lust"
            price="$120"
          />
        </View>
        <View style={groupsStyle}>
          <Group
            image={image3}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$110"
          />
          <Group
            image={image4}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$100"
          />
        </View>
        <GroupTitle title="Hoodie" />
        <View style={groupsStyle}>
          <Group
            image={image5}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$100"
          />
          <Group
            image={image6}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$120"
          />
        </View>
        <View style={groupsStyle}>
          <Group
            image={image3}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$110"
          />
          <Group
            image={image4}
            groupStyle={groupStyle}
            priceStyle={priceStyle}
            profileStyle={profileStyle}
            priceViewStyle={priceViewStyle}
            nameStyle={nameStyle}
            nameViewStyle={nameViewStyle}
            profileViewStyle={profileViewStyle}
            contentStyle={contentStyle}
            name="Noah Pink & Cyan T"
            price="$100"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    width: '100%',
    height: '100%',
    marginBottom: '40%',
  },
  groupsStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
  },
  groupStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: 177,
    width: '48%',
    borderWidth: 2,
    borderColor: '#C4C4C4',
    borderRadius: 10,
  },
  profileViewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 2,
  },
  profileStyle: {
    width: 118,
    height: 118,
  },
  nameViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  nameStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 10,
    fontWeight: 700,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '3%',
  },
  priceViewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    width: '30%',
  },
  priceStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: 700,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '3%',
  },
  contentStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 3,
    height: 50,
    borderTopWidth: 2,
    borderColor: '#C4C4C4',
  },
});

export default Groups;
