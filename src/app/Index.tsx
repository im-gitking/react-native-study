import { Text, View } from "react-native";
import ViewComponent from "../components/ViewComponent";
import TextComponent from "../components/TextComponent";
import ImageComponent from "../components/ImageComponent";

const Index = () => {
  return (
    <View>
      <TextComponent />
      <ViewComponent />
      <ImageComponent />
    </View>
  );
};

export default Index;
