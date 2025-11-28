// screens/CommunityScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const communities = [
  "La Brea",
  "Point D'or",
  "Sobo Village",
  "Union Village",
  "Aripero",
  "Rousillac",
  "Vance River",
  "Vessigny Village",
  "Cochrane",
  "Guapo",
  "Gonzales Village",
  "Parrylands",
  "Clifton Hill",
  "Cap-de-Ville",
  "Fanny Village",
  "Chatham",
];

export default function CommunityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Select Community
      </Text>

      <FlatList
        data={communities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 6 }}>
            <Button 
              title={item}
              onPress={() => navigation.navigate("Issue")}
            />
          </View>
        )}
      />
    </View>
  );
}

