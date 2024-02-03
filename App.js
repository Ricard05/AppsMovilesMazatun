import React from "react";
import Router from "./src/router/Router.main";
import RouterMenu from "./src/router/Router.menu";

const App = () => {
  return (
    <Router bottomNavigator={RouterMenu} />
  );
};

export default App;
