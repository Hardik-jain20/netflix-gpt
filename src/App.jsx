import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
