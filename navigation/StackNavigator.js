import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainMenu from '../screens/MainMenu';
import RegionScreen from '../screens/RegionScreen';
import WardScreen from '../screens/WardScreen';
import CommunityScreen from '../screens/CommunityScreen';
import IssueScreen from '../screens/IssueScreen';
import IssueDetailScreen from '../screens/IssueDetailScreen';
import SubmitScreen from '../screens/SubmitScreen';
import SwipeScreens from '../screens/SwipeScreens';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="Regions" component={RegionScreen} />
      <Stack.Screen name="Wards" component={WardScreen} />
      <Stack.Screen name="Communities" component={CommunityScreen} />
      <Stack.Screen name="Issue" component={IssueScreen} />
      <Stack.Screen name="IssueDetail" component={IssueDetailScreen} />
      <Stack.Screen name="Submit" component={SubmitScreen} />

      {/* Two screens accessible by swipe from Main Menu */}
      <Stack.Screen name="SwipeScreens" component={SwipeScreens} />
    </Stack.Navigator>
  );
}

