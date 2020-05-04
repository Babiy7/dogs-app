import React from 'react';
import classes from './Footer.module.scss';

import dog from '../../../assests/images/dog-footer.png';
import envelope from '../../../assests/icons/envelope.png';
import telephone from '../../../assests/icons/telephone.png';
import pin from '../../../assests/icons/pin.png';

import FooterContent from '../../FooterContent/FooterContent';

const contents = [
   {
      title: 'For questions and suggestions',
      items: [
         { icon: envelope, text: 'email@shelter.com' },
         { icon: telephone, text: '+13 674 567 75 54' },
      ],
   },
   {
      title: 'We are waiting for your visit',
      items: [
         {
            icon: pin,
            text: 'Boston, Central Street, 1st (Entrance from the store)',
         },
         { icon: pin, text: 'London, South Park, 18st' },
      ],
   },
];

const Footer = () => {
   let content = contents.map(content => (
      <FooterContent key={content.title} title={content.title} items={content.items} />
   ));

   return (
      <div className={classes.Footer}>
         <div className={classes.Container}>
            {content}
            <div className={classes.ImageContainer}>
               <img className={classes.Image} src={dog} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Footer;
