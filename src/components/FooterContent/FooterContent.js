import React from "react";
import classes from "./FooterContent.module.scss";

const FooterContent = props => {
  return (
    <div className={classes.FooterContent}>
      <h4 className={classes.Title}>{props.title}</h4>
      <div>
        {props.items.map(item => (
          <div className={classes.Item}>
            <div style={{ display: "flex" }}>
              <img className={classes.Icon} src={item.icon} alt="" />
            </div>

            <div className={classes.Text}>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
