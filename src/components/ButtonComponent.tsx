import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      {/* <Button title="Learn More" color="#000" /> */}
      {/* <Button title="Tap me" color="crimson" disabled></Button> */}
      {/* <Button
        title="Click & Check Console"
        onPress={() => console.log("Pressed")}
      ></Button> */}
      {/* <Button
        title="Click & Check Console"
        onPress={() => console.warn("Pressed")}
      ></Button> */}
      {/* <Button title="Alert" onPress={() => alert("Pressed")} /> */}

      {/* onPress: Function that is called when the component is pressed. Required.
      onPressIn: Function that is called when the press gesture starts.
      onPressOut: Function that is called when the press gesture ends (or is
      cancelled). onLongPress: Function that is called when a long press is
      detected. */}

      <Pressable onPress={() => console.log("Pressed")}>
        <Text style={{ color: "blue" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("On Press In")}>
        <Text style={{ color: "coral" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("On Press Out")}>
        <Text style={{ color: "coral" }}>Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("On Long Press")}>
        <Text style={{ color: "coral" }}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
