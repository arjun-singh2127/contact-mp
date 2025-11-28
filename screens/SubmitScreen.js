// screens/SubmitScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SubmitScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>
        Submission Received
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 40, textAlign: "center" }}>
        Thank you! Your issue has been submitted.  
        A representative will review it shortly.
      </Text>

      <Button title="Back to Home" onPress={() => navigation.navigate("MainMenu")} />
    </View>
  );
}

