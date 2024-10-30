import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponet = () => {
  return (
    <View>
      <Text>ParentComponet</Text>
      <ChildComponent
        name="Mr. Lion"
        age={10}
        hobbies={["hunting", "flying", "eating", "sleeping"]}
      />
    </View>
  );
};

export default ParentComponet;
