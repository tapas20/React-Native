import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import ExpoIcon from "./assets/adaptive-icon.png";
import Tapas from "./components/Tapas";
import StateVar from "./components/StateVar";
import Props from "./components/Props";
import Style from "./components/Style";
import TextInputBox from "./components/TextInputBox";
import Form from "./components/Form";
import FlatList from "./components/FlatList";
import Lists from "./components/Lists";
import Grid from "./components/Grid";
import LoopWithFlatList from "./components/LoopWithFlatList";
import SectionList from "./components/SectionList";
import ClassComponent from "./components/ClassComponent";
import UseEffect from "./components/UseEffect";
import Toggle from "./components/Toggle";
import Flexbox from "./components/FlexBox";
import Buttons from "./components/Buttons";
import RadioButton from "./components/RadioButton";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import PressableEvent from "./components/PressableEvent";
import StatusBarAndroid from "./components/StatusBarAndroid";
import Platform from "./components/Platform";
import NpmPackages from "./components/NpmPackages";
import CustomModal from "./components/CustomModal";
import ReactStackNavigation from "./components/ReactStackNavigation";
import ReactBottomTabNavigation from "./components/ReactBottomTabNavigation";
import ReactTopTabNavigation from "./components/ReactTopTabNavigation";
import ApiCall from "./components/ApiCall";
import ListWithApi from "./components/ListWithApi";
import FlatListWithApi from "./components/FlatListWithApi";
import JsonAPiCall from "./components/JsonAPiCall";
import SearchUsingApi from "./components/SearchUsingApi";
import RefInRN from "./components/RefInRN";
import AsyncStorageInRN from "./components/AsyncStorageInRN";

function TapasJ() {
  return (
    <View>
      <Text>Hello Tapas, Welcome to our app...! from App.js</Text>
    </View>
  );
}

export default function App() {
  let data = 100;
  const fruit = (val) => {
    data = 20;
    console.warn(data);
  };

  return (
    <View style={styles.container}>
      {/* <TapasJ /> */}
      {/* <Text>{data}</Text> */}
      {/* <Image source={ExpoIcon} style={{ height: 100, width: 100 }}></Image> */}
      {/* <Image
        source={{
          uri: "https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg?w=2000",
        }}
        style={{ width: 200, height: 200 }}
      /> */}
      {/* <ImageBackground source={ExpoIcon} style={{height: 600, width: 350}}>
        <Text>Expo Dev Img</Text>
      </ImageBackground> */}
      {/* <Button title="Press to start"></Button> */}
      {/* <Tapas /> */}
      {/* if you don't want to pass the parameter */}
      {/* <Button title="On Press" color={"green"} onPress={fruit} /> */}
      {/* if you want to pass the parameter */}
      {/* <Button
        title="On Press 2"
        color={"red"}
        onPress={() => fruit("Hello Tapas")}
      /> */}
      {/* <StateVar /> */}
      {/* <Props /> */}
      {/* <Style/> */}
      {/* <TextInputBox /> */}
      {/* <Form /> */}
      {/* <FlatList /> */}
      {/* <Lists /> */}
      {/* <Grid/> */}
      {/* <LoopWithFlatList /> */}
      {/* <SectionList /> */}
      {/* <ClassComponent /> */}
      {/* <UseEffect /> */}
      {/* <Toggle /> */}
      {/* <Flexbox /> */}
      {/* <Buttons /> */}
      {/* <RadioButton /> */}
      {/* <Loader /> */}
      {/* <Modal /> */}
      {/* <PressableEvent/> */}
      {/* <StatusBarAndroid /> */}
      {/* <Platform/> */}
      {/* <NpmPackages /> */}
      {/* <CustomModal/> */}
      {/* <ReactStackNavigation /> */}
      {/* <ReactBottomTabNavigation /> */}
      {/* <ReactTopTabNavigation /> */}
      {/* <ApiCall /> */}
      {/* <ListWithApi /> */}
      {/* <FlatListWithApi /> */}
      {/* <JsonAPiCall /> */}
      {/* <SearchUsingApi /> */}
      {/* <RefInRN /> */}
      <AsyncStorageInRN />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
