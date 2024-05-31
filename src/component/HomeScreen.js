import { View, Text, TouchableOpacity, Platform, UIManager, StyleSheet, LayoutAnimation, Button, SafeAreaView, PanResponder, Pressable, FlatList, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';

const HomeScreen = (props) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  //  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  //  const transition = SharedTransition.custom((values) => {
  //   'worklet';
  //   return {
  //     height: withSpring(values.targetHeight),
  //     width: withSpring(values.targetWidth),
  //   };
  // });
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
  //  const customTransition = SharedTransition.custom((values) => {
  //   'worklet';
  //   return {
  //     height: withSpring(values.targetHeight),
  //     width: withSpring(values.targetWidth),
  //     originX: withSpring(values.targetOriginX),
  //     originY: withSpring(values.targetOriginY),
  //   };
  // });
  //  const fadeIn = () => {
  //    // Will change fadeAnim value to 1 in 5 seconds
  //    Animated.timing(fadeAnim, {
  //      toValue: 1,
  //      duration: 1000,
  //      useNativeDriver: true,
  //    }).start();
  //  };
  //  const customTransition = SharedTransition.custom((values) => {
  //   'worklet';
  //   return {
  //     height: withSpring(values.targetHeight),
  //     width: withSpring(values.targetWidth),
  //     originX: withSpring(values.targetOriginX),
  //     originY: withSpring(values.targetOriginY),
  //   };
  // });
  //  const fadeOut = () => {
  //    // Will change fadeAnim value to 0 in 3 seconds
  //    Animated.timing(fadeAnim, {
  //      toValue: 0,
  //      duration: 1000,
  //      useNativeDriver: true,
  //    }).start();
  //  };
  const lakes = [
    {
      image: require('../assets/nature/lake-1.jpg'),
      title: 'Lake Annabelle',
      id: 'lake-1',
    },
    {
      image: require('../assets/nature/lake-2.jpg'),
      title: 'Lake Charlotte',
      id: 'lake-2',
    },
    {
      image: require('../assets/nature/lake-3.jpg'),
      title: 'Lake Claire',
      id: 'lake-3',
    },
    {
      image: require('../assets/nature/lake-4.jpg'),
      title: 'Lake Josephine',
      id: 'lake-4',
    },
    {
      image: require('../assets/nature/lake-5.jpg'),
      title: 'Lake Sophie',
      id: 'lake-5',
    },
  ]
  const forests = [
    {
      image: require('../assets/nature/forest-2.jpg'),
      title: 'Arne Forest',
      id: 'forest-1',
    },
    {
      image: require('../assets/nature/forest-4.jpg'),
      title: 'Birger Forest',
      id: 'forest-2',
    },
    {
      image: require('../assets/nature/forest-1.jpg'),
      title: 'Bjørn Forest',
      id: 'forest-3',
    },
    {
      image: require('../assets/nature/forest-3.jpg'),
      title: 'Halfdan Forest',
      id: 'forest-4',
    },
    {
      image: require('../assets/nature/forest-5.jpg'),
      title: 'Astrid Forest',
      id: 'forest-5',
    },
  ]
  const { tag } = props.route?.params;

  return (
    <View style={homeStyles.container}>
      <StatusBar barStyle={'dark-content'} />

      <View style={homeStyles.headerContainer}>
        <Pressable
          style={homeStyles.pressable}
          onPress={() => navigation.navigate("Filter")}>
          <Text style={homeStyles.title}>Home</Text>
          <Animated.Image
             sharedTransitionTag={tag}
            sharedTransitionStyle={transition}
            source={lakes[0].image}
            style={homeStyles.profile}
          />
          <Animated.Text
             sharedTransitionTag={`${tag}-text`}
            sharedTransitionStyle={transition}
          />
        </Pressable>
      </View>
      <Text style={homeStyles.subTitle}>Lakes</Text>
      <FlatList
        data={lakes}
        style={homeStyles.margin}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={homeStyles.marginHorizontal}
              onPress={() => {
                navigation.navigate('Details', {item});
              }}>
              <Animated.Image
                sharedTransitionTag={item.id}
                source={item.image}
                style={homeStyles.image}
              />
              <Animated.Text style={homeStyles.imageLabel}>
                {item.title}
              </Animated.Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />

      <Text style={homeStyles.subTitle}>Forests</Text>
      <FlatList
        data={forests}
        style={homeStyles.margin}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={homeStyles.marginHorizontal}
              onPress={() => {
                navigation.navigate('Details', { item });
              }}>
              <Animated.Image
                sharedTransitionTag={item.id}
                source={item.image}
                style={homeStyles.image}
              />
              <Animated.Text style={homeStyles.imageLabel}>
                {item.title}
              </Animated.Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );

  //   <SafeAreaView style={styles.container}>
  //   <Animated.View
  //     style={[
  //       styles.fadingContainer,
  //       {
  //         // Bind opacity to animated value
  //         opacity: fadeAnim,
  //       },
  //     ]}>
  //     <Text style={styles.fadingText}>Fading View!</Text>
  //   </Animated.View>
  //   <View style={styles.buttonRow}>
  //     <Button title="Fade In View" onPress={fadeIn} />
  //     <Button title="Fade Out View" onPress={fadeOut} />
  //   </View>
  // </SafeAreaView>

}
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: Platform.OS === 'ios' ? 120 : 80,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 25,
  },
  header: {
    fontSize: 40,
    color: '#1e293b',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  profile: {
    height: 45,
    width: 45,
  },
  image: {
    height: 200,
    width: 150,
    marginBottom: 8,
    borderRadius: 10,
  },
  imageLabel: {
    fontSize: 16,
    color: '#1e293b',
  },
  title: {
    fontSize: 40,
    flex: 1,
    color: '#1e293b',
  },
  subTitle: {
    fontSize: 24,
    color: '#334155',
    marginBottom: 15,
    marginLeft: 20,
  },
  margin: {
    marginLeft: 10,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     fadingContainer: {
//       padding: 20,
//       backgroundColor: 'powderblue',
//     },
//     fadingText: {
//       fontSize: 28,
//     },
//     buttonRow: {
//       flexBasis: 100,
//       justifyContent: 'space-evenly',
//       marginVertical: 16,
//     },
//   });
export default HomeScreen