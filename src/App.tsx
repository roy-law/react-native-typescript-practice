import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { PressableExample } from "./component/PressableExample";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <PressableExample />
      </SafeAreaView>
    </>
  );
};

export default App;
