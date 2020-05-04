import React from 'react';
import classes from './Categories.module.scss';

import catFood from '../../../assests/icons/cat-food.png';
import ambulance from '../../../assests/icons/ambulance.png';
import ball from '../../../assests/icons/ball.png';
import bowl from '../../../assests/icons/bowl.png';
import shampoo from '../../../assests/icons/shampoo.png';
import pills from '../../../assests/icons/pills.png';
import syringe from '../../../assests/icons/syringe.png';
import leash from '../../../assests/icons/leash.png';
import cat from '../../../assests/icons/cat.png';

import Category from '../../Category/Category';

const categories = [
   { icon: catFood, title: 'Pet food' },
   { icon: ambulance, title: 'Transportation' },
   { icon: ball, title: 'Toys' },
   { icon: bowl, title: 'Bowls and cups' },
   { icon: shampoo, title: 'Shampoos' },
   { icon: pills, title: 'Vitamins' },
   { icon: syringe, title: 'Medicines' },
   { icon: leash, title: 'Collars / leashes' },
   { icon: cat, title: 'Sleeping area' },
];

/* jshint ignore:start */
const Categories = props => {
   let cats = categories.map(category => (
      <Category key={category.title} icon={category.icon} title={category.title} />
   ));

   return (
      <div className={classes.Categories}>
         <div className={classes.Container}>
            <h4 className={classes.Title}>
               Than you can help <br /> our shelter
            </h4>

            <div className={classes.CategoriesContainer}>{cats}</div>
         </div>
      </div>
   );
};

export default Categories;
