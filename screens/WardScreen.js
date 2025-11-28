// screens/WardScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const wards = [
  "Siparia Ward",
  "Erin Ward",
  "Cedros Ward"
];

export default function WardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Select Ward
      </Text>

      <FlatList
        data={wards}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Button 
              title={item}
              onPress={() => navigation.navigate("Communities")}
            />
          </View>
        )}
      />
    </View>
  );
}

