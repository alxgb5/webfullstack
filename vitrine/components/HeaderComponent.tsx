import { UIButton } from 'my-lib-ui';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const HeaderComponent: React.FC = () => {

  const [token, setToken] = useState<string>('');

  useEffect(() => {
    localStorage.getItem('ride_token') && setToken(localStorage.getItem('ride_token') as string);
  });


  return (
    <header className="header">
      <div className="left">
        <img src='/logo.svg' alt='Ride Logo' />

        <p>RIDE</p>
      </div>
      {
        !token &&
        <UIButton onClick={() => { Router.push('/login'); }} label={"Connexion admin"} color={"primary"}></UIButton>
      }
    </header>
  );
};

export default HeaderComponent;