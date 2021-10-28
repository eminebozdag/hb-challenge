import React from 'react';
import LogoSvg from '../../../../assets/images/logo.svg';
import './logo.css';

interface Props {
   onClick(): void;
}
const Logo = ({ onClick }: Props) => {
   return (
      <div className="logo" onClick={() => onClick()}>
         <img data-testid="logo" src={LogoSvg} alt="logo" />
      </div>
   );
};

export default Logo;
