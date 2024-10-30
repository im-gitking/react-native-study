import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = ["apple", "banana", "orange", "pineapple"];

  return (
    <View>
      {/* <FlatList data={fruits} renderItem={({ item }) => console.log(item)} /> */}

      <FlatList
        data={fruits}
        keyExtractor={(item) => item} //providing unique key to each item
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ListData;
