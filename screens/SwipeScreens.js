// screens/SwipeScreens.js
import React from 'react';
import PagerView from 'react-native-pager-view';
import { StyleSheet } from 'react-native';
import CommunityActivitiesScreen from './CommunityActivitiesScreen';
import GeneralInfoScreen from './GeneralInfoScreen';

export default function SwipeScreens() {
  return (
    <PagerView style={styles.pager} initialPage={0}>
      <CommunityActivitiesScreen key="1" />
      <GeneralInfoScreen key="2" />
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pager: { flex: 1 }
});

