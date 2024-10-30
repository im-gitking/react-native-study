import { View, Text } from "react-native";
import React from "react";

const DynamicComponent = () => {
  const username = "Mr. Lion";
  const multiply = (x: number, y: number) => x * y;
  let me = {
    name: "Mr. Lion",
    age: 24,
  };

  return (
    <View>
      <Text>{username}</Text>
      <Text>{2 + 10}</Text>
      <Text> 2 x 3 = {multiply(2, 3)}</Text>
      <Text>
        My name is {me.name}, and my age is {me.age}
      </Text>
    </View>
  );
};

export default DynamicComponent;
