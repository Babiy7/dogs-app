import React from "react";
import classes from "./App.module.scss";

import Header from "./components/Sections/Header/Header";
import Intro from "./components/Sections/Intro/Intro";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Intro />
      <button className={classes.Button}>My button</button>
    </div>
  );
}

export default App;
