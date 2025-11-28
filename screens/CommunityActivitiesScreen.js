// screens/CommunityActivitiesScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const activities = [
  "Beach Cleanup",
  "Village Council Meeting",
  "Sports Day",
  "Health Check Clinic",
  "Cultural Event"
];

export default function CommunityActivitiesScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Community Activities
      </Text>

      <FlatList
        data={activities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginVertical: 8 }}>• {item}</Text>
        )}
      />
    </View>
  );
}

