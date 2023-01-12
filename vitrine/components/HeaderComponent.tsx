import { UIButton } from 'my-lib-ui';
import Router from 'next/router';

const HeaderComponent: React.FC = () => {
  return (
    <header className="header">
      <div className="left">
        <img src='/logo.svg' alt='Ride Logo' />

        <p>RIDE</p>
      </div>
      {
        !localStorage.getItem('ride_token') ?
          <UIButton onClick={() => { Router.push('/login'); }} label={"Connexion admin"} color={"primary"}></UIButton>
          : <></>
      }
    </header>
  );
};

export default HeaderComponent;