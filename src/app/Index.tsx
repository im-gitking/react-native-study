import { Text, View } from "react-native";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import FavSubjectComponent from "../components/FavSubjectComponent";
import XHandleComponent from "../components/XHandleComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent />
    </View>
  );
};

export default Index;
