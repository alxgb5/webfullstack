import { cp } from 'fs';
import { UIButton } from 'my-lib-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/img/logo.svg';

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
  });


  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt='Ride Logo' />

        <p>RIDE</p>
      </div>
    </header>
  );
};

export default HeaderComponent;