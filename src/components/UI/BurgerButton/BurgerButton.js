import React from 'react';
import classes from './BurgerButton.module.scss';

const BurgerButton = props => {
   return (
      <div className={classes.BurgerButton}>
         {[1, 2, 3].map(_ => (
            <div key={_} className={classes.Line} />
         ))}
      </div>
   );
};

export default BurgerButton;
