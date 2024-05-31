import { Pressable, StatusBar, StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { FadeIn, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

function DetailsScreen({
    route,
    navigation,
  }) {
    const springOptions = {
        damping: 15,
      };
    const { item } = route.params;
    const FLING_LIMIT = 160;
    const translation = {
      x: useSharedValue(0),
      y: useSharedValue(0),
    };
    const runOnlyOnce = useSharedValue(false);
  
    const goBack = () => {
      navigation.goBack();
    };
  
    const pan = Gesture.Pan()
      .onChange((event) => {
        translation.x.value += event.changeX;
        translation.y.value += event.changeY;
  
        if (
          event.translationY > FLING_LIMIT ||
          event.translationY < -FLING_LIMIT ||
          event.translationX > FLING_LIMIT ||
          event.translationX < -FLING_LIMIT
        ) {
          if (!runOnlyOnce.value) {
            runOnlyOnce.value = true;
            runOnJS(goBack)();
          }
        }
      })
      .onFinalize(() => {
        translation.x.value = withSpring(0, springOptions);
        translation.y.value = withSpring(0, springOptions);
      });
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: translation.x.value },
          { translateY: translation.y.value },
          // prettier-ignore
          { scale: 1 - (Math.abs(translation.x.value) + Math.abs(translation.y.value)) / 1000 },
        ],
      };
    });
  
    return (
      <>
        <StatusBar barStyle={'dark-content'} />
        <GestureDetector gesture={pan}>
          <Animated.View style={[detailStyles.container, animatedStyle]}>
            <Animated.Image
              sharedTransitionTag={item.id}
              source={item.image}
              style={detailStyles.image}
            />
            <Animated.View
              style={detailStyles.background}
              entering={FadeIn.delay(50).duration(600)}>
              <Animated.Text
                entering={FadeIn.delay(200).duration(1000)}
                style={detailStyles.title}>
                {item.title}
              </Animated.Text>
              <Animated.Text
                entering={FadeIn.delay(400).duration(1000)}
                style={detailStyles.description}>
                Nature is a symphony of sights, sounds, and sensations that awaken
                our senses and nourish our souls. From the gentle rustling of
                leaves in the breeze to the awe-inspiring grandeur of towering
                mountains, nature is a masterpiece that never ceases to amaze us.
              </Animated.Text>
              <Animated.View
                entering={FadeIn.delay(800).duration(1000)}
                style={detailStyles.callToActionWrapper}>
                <Pressable
                  style={detailStyles.callToAction}
                  onPress={() => navigation.navigate("Bubbles")}>
                  <Text style={detailStyles.callToActionText}>Looks good!</Text>
                </Pressable>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </GestureDetector>
      </>
    );
  }
  
  const detailStyles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 16,
      overflow: 'hidden',
    },
    background: {
      flex: 1,
      backgroundColor: '#f8fafc',
    },
    image: {
      height: 300,
      width: 500,
    },
    description: {
      fontSize: 16,
      marginTop: 8,
      marginHorizontal: 20,
      color: '#1e293b',
    },
    title: {
      fontSize: 40,
      color: '#0f172a',
      marginHorizontal: 20,
      marginTop: 15,
      marginBottom: 20,
    },
    callToActionWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    callToAction: {
      backgroundColor: '#0f172a',
      padding: 16,
      width: 250,
      borderRadius: 5,
    },
    callToActionText: {
      color: '#f8fafc',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 16,
    },
  });

  export default DetailsScreen