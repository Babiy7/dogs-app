import React from "react";
import classes from "./App.module.scss";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Sections/Header/Header";
import Sections from "./components/Sections/Sections";
import Pagination from "./containers/Pagination/Pagination";
import Categories from "./components/Sections/Categories/Categories";
import Footer from "./components/Sections/Footer/Footer";

function App() {
  let Padding = props => (
    <div style={{ paddingTop: `${props.padding}px` }}></div>
  );

  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Sections />} />
        <Route path="/pets" render={() => <Pagination />} />
        <Route
          path="/shelter"
          render={() => (
            <>
              <Padding padding={50} />
              <Categories />
            </>
          )}
        />
        <Route path="/contacts" render={() => <Padding padding={120} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
