// screens/MainMenu.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function MainMenu({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>

      <Button 
        title="Communities →" 
        onPress={() => navigation.navigate("Regions")} 
      />

      {/* Swipe screens: community activities, general info */}
      <TouchableOpacity
        onPress={() => navigation.navigate("SwipeScreens")}
        style={{ marginTop: 30 }}
      >
        <Text style={{ fontSize: 18, color: "blue" }}>
          Swipe Left/Right for Activities & Info
        </Text>
      </TouchableOpacity>

    </View>
  );
}

