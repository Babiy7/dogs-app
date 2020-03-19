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
    </div>
  );
}

export default App;
