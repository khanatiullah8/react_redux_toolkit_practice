import React from "react";
import "./App.css";
import Fruit from "./features/fruit/Fruit";
import User from "./features/user/User";
import Vegetable from "./features/vegetable/Vegetable";

const App = () => {
  return (
    <>
      <div className="App">
        <Fruit />
        <Vegetable />
        <User />
      </div>
    </>
  );
};

export default App;
