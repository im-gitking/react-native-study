import { View, Text } from "react-native";
import React from "react";
import st from "../utils/style";

const ExternalStyle = () => {
  return (
    <View>
      <Text style={st.textStyle}>External Style</Text>
    </View>
  );
};

export default ExternalStyle;