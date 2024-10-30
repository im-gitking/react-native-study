import { View, Text, Image, Button } from "react-native";
import React from "react";

const CarComponent = () => {
  const price = 1000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carDescription = "Here is a Lambo car";
  const carRattings = 4.5;

  return (
    <View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1535382651921-5e77ea4458f2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text>{carName}</Text>
      <Text>{carRattings}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>
      <Button title="Add to cart" />
    </View>
  );
};

export default CarComponent;
