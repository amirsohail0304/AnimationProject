import { View, Text, StyleSheet, Button, StatusBar, Dimensions, Image, Pressable, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FilterScreen = (props) => {
  const navigation = useNavigation();
  // const transition = SharedTransition.custom((values) => {
  //   'worklet';
  //   return {
  //     height: withSpring(values.targetHeight),
  //     width: withSpring(values.targetWidth),
  //   };
  // });
  const goToDetails = (tag) => {
    navigation.navigate('Home', {tag});
  };
  const profiles = {
    dog: {
      image: require('../assets/avatars/dog.png'),
      title: 'Maria',
    },
    desert: {
      image: require('../assets/avatars/desert.png'),
      title: 'Alice',
    },
    cat: {
      image: require('../assets/avatars/cat.png'),
      title: 'James',
    },
    mountains: {
      image: require('../assets/avatars/mountains.png'),
      title: 'Jennifer',
    },
    parrot: {
      image: require('../assets/avatars/parrot.png'),
      title: 'Thomas',
    },
    wolf: {
      image: require('../assets/avatars/wolf.png'),
      title: 'Margaret',
    },
  }
  const springOptions = {
    damping: 15,
  };
  
  const transition = SharedTransition.custom((values) => {
    'worklet';
    return {
      width: withSpring(values.targetWidth, springOptions),
      height: withSpring(values.targetHeight, springOptions),
      originX: withSpring(values.targetOriginX, springOptions),
      originY: withSpring(values.targetOriginY, springOptions),
    };
  });
  const leavesBackground = require('../assets/nature/leaves.jpg');
  return (
    <View style={profilesStyles.container}>
    <StatusBar barStyle={'light-content'} />
    <Image source={leavesBackground} style={profilesStyles.backgroundImage} />
    <Text style={profilesStyles.header}>Welcome back!</Text>
    <View style={commonStyles.row}>
      {Object.keys(profiles).map((tag) => (
        
        <Pressable
          onPress={() => goToDetails(tag)}
          key={tag}
          style={profilesStyles.profileWrapper}>
            {console.log("hdfjdfjdfj", tag)}
          <Animated.Image
            sharedTransitionTag={tag}
            sharedTransitionStyle={transition}
            source={profiles[tag].image}
            style={profilesStyles.profile}
          />
          <Animated.Text
            sharedTransitionTag={`${tag}-text`}
            sharedTransitionStyle={transition}
            style={profilesStyles.profileLabel}>
            {profiles[tag].title}
          </Animated.Text>
        </Pressable>
      ))}
    </View>
  </View>
  //   <View style={{ flex: 1, marginTop: 50 }}>
  //   <Animated.View
  //     style={{ width: 100, height: 100, backgroundColor: 'green' }}
  //     sharedTransitionTag="sharedTag"
  //     // sharedTransitionStyle={transition}
  //   />
  //   <Button title="Home" onPress={() => navigation.navigate('Home')} />
  // </View>
  )
}
const profilesStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 100 : 25,
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    opacity: 0.6,
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#f0fdf4',
    marginBottom: 20,
  },
  profileWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  profile: {
    height: 150,
    width: 150,
    marginBottom: 8,
  },
  profileLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#f0fdf4',
  },
});
const commonStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 25,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
export default FilterScreen