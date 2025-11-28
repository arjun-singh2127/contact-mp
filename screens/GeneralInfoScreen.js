// screens/GeneralInfoScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const infoItems = [
  "Planned Outages",
  "Traffic Disruptions",
  "Road Works",
  "Weather Alerts",
  "Public Notices"
];

export default function GeneralInfoScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        General Information
      </Text>

      <FlatList
        data={infoItems}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginVertical: 8 }}>• {item}</Text>
        )}
      />
    </View>
  );
}

