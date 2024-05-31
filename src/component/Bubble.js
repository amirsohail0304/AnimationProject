import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring,
  } from 'react-native-reanimated';
  import { StyleSheet, View } from 'react-native';
  
  import React from 'react';
  
  const ROWS = 23;
  const COLS = 12;
  
  function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  

  
  function Bubble({ row, col }) {
    const backgroundColor = React.useRef(getRandomColor()).current;
  
    const width = useSharedValue(0);
  
    React.useEffect(() => {
      const delay = 400 + Math.random() * row * 10 + Math.random() * 1000;
      width.value = withDelay(delay, withSpring(40, { damping: 1e6 }));
    }, [width, row, col]);
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        width: width.value,
        height: width.value,
        borderRadius: width.value / 2,
      };
    }, []);
  
    return <Animated.View style={[{ backgroundColor }, animatedStyle]} />;
  }
  

  
  function BubbleRow({ row }) {
    return (
      <View style={[styles.row, { paddingLeft: 40 * (row % 2) }]}>
        {[...Array(COLS)].map((_, col) => (
          <Bubble row={row} col={col} key={col} />
        ))}
      </View>
    );
  }
  
  export const Bubbles=()=> {
    return (
      <View style={styles.container}>
        {[...Array(ROWS)].map((_, row) => (
          <BubbleRow row={row} key={row} />
        ))}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      overflow: 'hidden',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -5,
    },
  });