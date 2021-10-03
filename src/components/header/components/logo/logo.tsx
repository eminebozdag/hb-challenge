import React from 'react';
import LogoSvg from '../../../../assets/images/logo.svg';

const Logo = () => {
   return (
      <div className="logo">
         <img src={LogoSvg} alt="logo" />
      </div>
   );
};

export default Logo;
