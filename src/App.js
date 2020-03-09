import React from "react";
import classes from "./App.module.scss";

import Header from "./components/Sections/Header/Header";
import Intro from "./components/Sections/Intro/Intro";
import About from "./components/Sections/About/About";
import Friends from "./components/Sections/Friends/Friends";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Intro />
      <About />
      <Friends />
      <button className={classes.Button}>My button</button>
    </div>
  );
}

export default App;
