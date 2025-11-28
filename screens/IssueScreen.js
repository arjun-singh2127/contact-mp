// screens/IssueScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const issues = [
  "Water",
  "Electricity",
  "Roads",
  "Bridges",
  "Drainage",
  "Garbage",
  "Street Lighting",
  "Other"
];

export default function IssueScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Select Issue
      </Text>

      <FlatList
        data={issues}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Button 
              title={item}
              onPress={() => navigation.navigate("IssueDetail", { issue: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

