import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { InputField, PasswordField, UIButton } from 'my-lib-ui';
import { FormEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GenericResponse } from '../../types/generic-response';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    fetch('/api/.user/login/admin', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(async (response) => {
      const parsedResponse: GenericResponse = await response.json();
      setLoading(false);

      if (parsedResponse.success && parsedResponse.data?.token) {
        localStorage.setItem('ride_token', parsedResponse.data.token);
        navigate('/dashboard');
      }
    }, (error) => {
      console.log("🚀 ~ fetch ~ error", error);
      setLoading(false);

    });
  };

  return (
    <div>
      <HeadComponent />

      <HeaderComponent />

      <main className='login'>
        <div className='loginCard'>
          <a href={"/"} className="back"><span className='arrow'>←</span> retour</a>

          <div className='loginForm'>
            <h1>Connexion</h1>

            <form onSubmit={(e) => { handleSubmit(e); }}>
              <InputField label='identifiant' value={username} onChange={(e) => { setUsername(e.target.value); }} />
              <PasswordField label='mot de passe' value={password} onChange={(e) => { setPassword(e.target.value); }} />
              <UIButton label='Connexion' color='primary' type={'submit'} disabled={loading} />
            </form>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}