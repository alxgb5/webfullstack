import { UIButton } from 'my-lib-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeaderComponent.scss';
import Logo from '../assets/img/logo.svg';
const HeaderComponent: React.FC = () => {

  const [token, setToken] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('ride_token') && setToken(localStorage.getItem('ride_token') as string);
  });


  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt='Ride Logo' />

        <p>RIDE</p>
      </div>
      {
        !token &&
        <UIButton onClick={() => { navigate('/login'); }} label={"Connexion admin"} color={"primary"}></UIButton>
      }
    </header>
  );
};

export default HeaderComponent;