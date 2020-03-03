import React from "react";
import classes from "./App.module.scss";

import Intro from "./components/Sections/Intro/Intro";

function App() {
  return (
    <div className={classes.App}>
      <Intro />
    </div>
  );
}

export default App;
