/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/component/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterScreen from './src/component/FilterScreen';
import DetailsScreen from './src/component/DetailScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Bubbles } from './src/component/Bubble';
import AnimatableRefExample from './src/component/AnimatableRef';
import AnimatedKeyboardExample from './src/component/AnimatedKeyboardExample';
import AnimatedSensorExample from './src/component/AnimatedSensorExample';
import AnimatedStyleUpdateExample from './src/component/AnimatedStyleUpdateExample';
import AnimatedTabBarExample from './src/component/AnimatedTabBarExample';
import ChatHeadsExample from './src/component/ChatHeadsExample';
import ChessboardExample from './src/component/ChessboardExample';
import ColorExample from './src/component/ColorExample';
import ColorInterpolationExample from './src/component/ColorInterpolationExample';
import CubesExample from './src/component/CubesExample';
import DragAndSnapExample from './src/component/DragAndSnapExample';
import EmojiWaterfallExample from './src/component/EmojiWaterfallExample';
import ExtrapolationExample from './src/component/ExtrapolationExample';
import GestureHandlerExample from './src/component/GestureHandlerExample';
import IPodExample from './src/component/IPodExample';
import InvertedFlatListExample from './src/component/InvertedFlatListExample';
import LettersExample from './src/component/LettersExample';
import LightBoxExample from './src/component/LightBoxExample';
import MeasureExample from './src/component/MeasureExample';
import NewestShadowNodesRegistryRemoveExample from './src/component/NewestShadowNodesRegistryRemoveExample';
import OldMeasureExample from './src/component/OldMeasureExample';
import OldAnimatedSensorExample from './src/component/OldAnimatedSensorExample';
import OverlappingBoxesExample from './src/component/OverlappingBoxesExample';
import PinExample from './src/component/PinExample';
import RefExample from './src/component/RefExample';
import ScreenStackExample from './src/component/ScreenStackExample';
import ScreenStackHeaderConfigBackgroundColorExample from './src/component/ScreenStackHeaderConfigBackgroundColorExample';
import ScrollEventExample from './src/component/ScrollEventExample';
import ScrollToExample from './src/component/ScrollToExample';
import ScrollViewExample from './src/component/ScrollViewExample';
import ScrollViewOffsetExample from './src/component/ScrollViewOffsetExample';
import ScrollableViewExample from './src/component/ScrollableViewExample';
import SharedStyleExample from './src/component/SharedStyleExample';
import SvgExample from './src/component/SvgExample';
import SwipeableListExample from './src/component/SwipeableListExample';
import TransformExample from './src/component/TransformExample';
import VolumeExample from './src/component/VolumeExample';
import WidthExample from './src/component/WidthExample';
import WithoutBabelPluginExample from './src/component/WithoutBabelPluginExample';
import WobbleExample from './src/component/WobbleExample';
import WorkletExample from './src/component/WorkletExample';
import CardExample from './src/component/sharedElementTransaction/SharedCardExample';
import FlatListExample from './src/component/sharedElementTransaction/FlatListTransaction';
import GalleryExample from './src/component/sharedElementTransaction/Gallery';
import ImageStackExample from './src/component/sharedElementTransaction/ImageStack';
import ManyScreensExample from './src/component/sharedElementTransaction/ManyScreens';
import NestedStacksExample from './src/component/sharedElementTransaction/NestedStacks';
import RestoreStateExample from './src/component/sharedElementTransaction/RestoreState';
import LiquidSwipe from './src/component/swipe/LiquidSwipe';
import AnimatedListExample from './src/component/layoutAnimation/AnimatedList';
import BasicLayoutAnimation from './src/component/layoutAnimation/BasicLayoutAnimation';
import BasicNestedAnimation from './src/component/layoutAnimation/BasicNestedAnimation';
import BasicNestedLayoutAnimation from './src/component/layoutAnimation/BasicNestedLayoutAnimation';
import Carousel from './src/component/layoutAnimation/Carousel';
import CombinedTest from './src/component/layoutAnimation/Combined';
import CustomLayoutAnimationScreen from './src/component/layoutAnimation/CustomLayout';
import DefaultAnimations from './src/component/layoutAnimation/DefaultAnimations';
import DeleteAncestorOfExiting from './src/component/layoutAnimation/DeleteAncestorOfExiting';
import KeyframeAnimation from './src/component/layoutAnimation/KeyframeAnimation';
import Modal from './src/component/layoutAnimation/Modal';
import ModalNewAPI from './src/component/layoutAnimation/ModalNewAPI';
import MountingUnmounting from './src/component/layoutAnimation/MountingUnmounting';
import NativeModals from './src/component/layoutAnimation/NativeModals';
import NestedTest from './src/component/layoutAnimation/Nested';
import NestedNativeStacksWithLayout from './src/component/layoutAnimation/NestedNativeStacksWithLayout';
import OlympicAnimation from './src/component/layoutAnimation/OlympicAnimation';
import ReactionsCounterExample from './src/component/layoutAnimation/ReactionsCounterExample';
import SpringLayoutAnimation from './src/component/layoutAnimation/SpringLayoutAnimation';
import SwipeableList from './src/component/layoutAnimation/SwipeableList';
import WaterfallGridExample from './src/component/layoutAnimation/WaterfallGridExample';
import PagerExample from './src/component/customHandler/PagerExample';
import CircleAnimation from './src/component/CircleAnimation';




const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='CircleAnimation'
        >
          <Stack.Screen name="Filter" component={FilterScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="PagerExample" component={PagerExample} />
          <Stack.Screen name="CircleAnimation" component={CircleAnimation} />
          <Stack.Screen name="WaterfallGrid" component={WaterfallGridExample} />
          <Stack.Screen name="SwipeableList" component={SwipeableList} />
          <Stack.Screen name="SpringLayoutAnimation" component={SpringLayoutAnimation} />
          <Stack.Screen name="OlympicAnimation" component={OlympicAnimation} />
          <Stack.Screen name="ReactionsCounter" component={ReactionsCounterExample} />
          <Stack.Screen name="NestedNativeStacksWithLayout" component={NestedNativeStacksWithLayout} />
          <Stack.Screen name="NestedTest" component={NestedTest} />
          <Stack.Screen name="NativeModals" component={NativeModals} />
          <Stack.Screen name="MountingUnmounting" component={MountingUnmounting} />
          <Stack.Screen name="Modal" component={Modal} />
          <Stack.Screen name="ModalNewAPI" component={ModalNewAPI} />
          <Stack.Screen name="KeyframeAnimation" component={KeyframeAnimation} />
          <Stack.Screen name="DeleteAncestorOfExiting" component={DeleteAncestorOfExiting} />
          <Stack.Screen name="DefaultAnimations" component={DefaultAnimations} />
          <Stack.Screen name="CustomLayoutAnimation" component={CustomLayoutAnimationScreen} />
          <Stack.Screen name="CombinedTest" component={CombinedTest} />
          <Stack.Screen name="Carousel" component={Carousel} />
          <Stack.Screen name="BasicNestedLayoutAnimation" component={BasicNestedLayoutAnimation} />
          <Stack.Screen name="BasicNestedAnimation" component={BasicNestedAnimation} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Bubbles" component={Bubbles} />
          <Stack.Screen name="AnimatableRef" component={AnimatableRefExample} />
          <Stack.Screen name="AnimatedKeyboard" component={AnimatedKeyboardExample} />
          <Stack.Screen name="AnimatedSensor" component={AnimatedSensorExample} />
          <Stack.Screen name="AnimatedStyleUpdate" component={AnimatedStyleUpdateExample} />
          <Stack.Screen name="AnimatedTabBar" component={AnimatedTabBarExample} />
          <Stack.Screen name="ChatHeads" component={ChatHeadsExample} />
          <Stack.Screen name="Chessboard" component={ChessboardExample} />
          <Stack.Screen name="ColorExample" component={ColorExample} />
          <Stack.Screen name="ColorInterpolation" component={ColorInterpolationExample} />
          <Stack.Screen name="CubesExample" component={CubesExample} />
          <Stack.Screen name="DragAndSnap" component={DragAndSnapExample} />
          <Stack.Screen name="EmojiWaterfall" component={EmojiWaterfallExample} />
          <Stack.Screen name="Extrapolation" component={ExtrapolationExample} />
          <Stack.Screen name="GestureHandler" component={GestureHandlerExample} />
          <Stack.Screen name="IPodExample" component={IPodExample} />
          <Stack.Screen name="InvertedFlatList" component={InvertedFlatListExample} />
          <Stack.Screen name="LettersExample" component={LettersExample} />
          <Stack.Screen name="LightBox" component={LightBoxExample} />
          <Stack.Screen name="MeasureExample" component={MeasureExample} />
          <Stack.Screen name="NewestShadowNodesRegistryRemove" component={NewestShadowNodesRegistryRemoveExample} />
          <Stack.Screen name="OldMeasureExample" component={OldMeasureExample} />
          <Stack.Screen name="OldAnimatedSensor" component={OldAnimatedSensorExample} />
          <Stack.Screen name="OverlappingBoxes" component={OverlappingBoxesExample} />
          <Stack.Screen name="PinExample" component={PinExample} />
          <Stack.Screen name="RefExample" component={RefExample} />
          <Stack.Screen name="ScreenStack" component={ScreenStackExample} />
          <Stack.Screen name="ScreenStackHeaderConfigBackgroundColor" component={ScreenStackHeaderConfigBackgroundColorExample} />
          <Stack.Screen name="ScrollEventExample" component={ScrollEventExample} />
          <Stack.Screen name="ScrollToExample" component={ScrollToExample} />
          <Stack.Screen name="ScrollViewExample" component={ScrollViewExample} />
          <Stack.Screen name="ScrollViewOffsetExample" component={ScrollViewOffsetExample} />
          <Stack.Screen name="ScrollableViewExample" component={ScrollableViewExample} />
          <Stack.Screen name="SharedStyleExample" component={SharedStyleExample} />
          <Stack.Screen name="SvgExample" component={SvgExample} />
          <Stack.Screen name="SwipeableListExample" component={SwipeableListExample} />
          <Stack.Screen name="TransformExample" component={TransformExample} />
          <Stack.Screen name="VolumeExample" component={VolumeExample} />
          <Stack.Screen name="WidthExample" component={WidthExample} />
          <Stack.Screen name="WithoutBabelPlugin" component={WithoutBabelPluginExample} />
          <Stack.Screen name="WobbleExample" component={WobbleExample} />
          <Stack.Screen name="WorkletExample" component={WorkletExample} />
          <Stack.Screen name="CardExample" component={CardExample} />
          <Stack.Screen name="FlatListExample" component={FlatListExample} />
          <Stack.Screen name="GalleryExample" component={GalleryExample} />
          <Stack.Screen name="ImageStackExample" component={ImageStackExample} />
          <Stack.Screen name="ManyScreensExample" component={ManyScreensExample} />
          <Stack.Screen name="NestedStacks" component={NestedStacksExample} />
          <Stack.Screen name="RestoreState" component={RestoreStateExample} />
          <Stack.Screen name="LiquidSwipe" component={LiquidSwipe} />
          <Stack.Screen name="AnimatedList" component={AnimatedListExample} />
          <Stack.Screen name="BasicLayoutAnimation" component={BasicLayoutAnimation} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default App;
