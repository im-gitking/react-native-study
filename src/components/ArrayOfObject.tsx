import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObject = () => {
  const locations = [
    { id: 1, location: "India" },
    { id: 2, location: "Brazil" },
    { id: 3, location: "Canada" },
    { id: 4, location: "Japan" },
    { id: 5, location: "Germany" },
    { id: 6, location: "Australia" },
    { id: 7, location: "South Africa" },
    { id: 8, location: "France" },
    { id: 9, location: "Italy" },
    { id: 10, location: "Mexico" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => <Text>{item.location}</Text>}
      />
    </View>
  );
};

export default ArrayOfObject;
