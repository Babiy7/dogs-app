import React, { useState } from "react";
import classes from "./App.module.scss";

import Header from "./components/Sections/Header/Header";
import Intro from "./components/Sections/Intro/Intro";
import About from "./components/Sections/About/About";
import Friends from "./components/Sections/Friends/Friends";
import Categories from "./components/Sections/Categories/Categories";
import Addition from "./components/Sections/Addition/Addition";
import Footer from "./components/Sections/Footer/Footer";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.App}>
      <Header />
      <Intro />
      <About />
      <Friends />
      <Categories />
      <Addition />
      <Footer />
      <Modal show={open} unShow={() => setOpen(!open)} />
      <button
        onClick={() => setOpen(!open)}
        style={{ position: "absolute", top: "0", left: "0", zIndex: "20" }}
      >
        click
      </button>
    </div>
  );
}

export default App;
