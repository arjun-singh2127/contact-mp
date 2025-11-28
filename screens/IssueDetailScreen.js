// screens/IssueDetailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function IssueDetailScreen({ route, navigation }) {
  const { issue } = route.params;

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Describe the Issue: {issue}
      </Text>

      <Text style={{ marginTop: 20 }}>Details:</Text>
      <TextInput
        placeholder="Enter issue details"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        multiline
      />

      <Text>Location:</Text>
      <TextInput
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <Text>Contact Info:</Text>
      <TextInput
        placeholder="Phone or Email"
        value={contact}
        onChangeText={setContact}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <Button 
        title="Submit" 
        onPress={() => navigation.navigate("Submit")}
      />
    </View>
  );
}

