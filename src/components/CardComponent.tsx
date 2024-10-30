import { View, Text, Image, Button } from "react-native";
import React from "react";

const CardComponent = () => {
  return (
    <View>
      <Image
        source={require("../assets/lion.webp")}
        style={{ width: 200, height: 200 }}
      />

      <Text>King Lion</Text>
      <Text>I'm King of the jungle.</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default CardComponent;
