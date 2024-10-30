import { View, Text } from "react-native";
import React from "react";

interface ChildProps {
  name: string;
  age: number;
  hobbies: string[];
}

/*const ChildComponent = (props: any) => {
  console.log(props);

  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.hobbies}</Text>
    </View>
  );
};*/

const ChildComponent = ({ name, age, hobbies }: ChildProps) => {
  console.log(name, age, hobbies);

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age:{age}</Text>
      <Text>Hobbies: {hobbies}</Text>
    </View>
  );
};

export default ChildComponent;
