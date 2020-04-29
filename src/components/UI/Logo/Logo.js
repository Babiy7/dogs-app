import React from "react";
import classes from "./Logo.module.scss";

import { connect } from "react-redux";

const Logo = props => {
  const theme = props.theme;

  return (
    <div className={classes.Logo}>
      <h3
        className={[
          classes.Title,
          theme === "white" ? classes.TitleDark : ""
        ].join(" ")}
      >
        Cozy House
      </h3>
      <div
        className={[
          classes.Subtitle,
          theme === "white" ? classes.SubtitleDark : ""
        ].join(" ")}
      >
        Shelter for pets in Boston
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ theme: state.theme });

export default connect(mapStateToProps)(Logo);
