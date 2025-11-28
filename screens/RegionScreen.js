// screens/RegionScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Select Region</Text>

      <Button 
        title="St. Patrick →" 
        onPress={() => navigation.navigate("Wards")}
      />
    </View>
  );
}

