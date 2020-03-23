import React from "react";
import classes from "./App.module.scss";

import Header from "./components/Sections/Header/Header";
import Intro from "./components/Sections/Intro/Intro";
import About from "./components/Sections/About/About";
import Friends from "./components/Sections/Friends/Friends";
import Categories from "./components/Sections/Categories/Categories";
import Addition from "./components/Sections/Addition/Addition";
import Footer from "./components/Sections/Footer/Footer";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Intro />
      <About />
      <Friends />
      <Categories />
      <Addition />
      <Footer />

      <div className={classes.Grid}>
        <div className={classes.Container}>
          <div className={classes.Item}>Item 1</div>

          <div className={classes.Item}>Item 2</div>

          <div className={classes.Item}>Item 3</div>

          {/* <div className={classes.Item}>Item 4</div>

          <div className={classes.Item}>Item 5</div>

          <div className={classes.Item}>Item 6</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
