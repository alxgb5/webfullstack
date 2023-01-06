import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Link from 'next/link';
import { InputField, PasswordField, UIButton } from 'my-lib-ui';
import { FormEvent, MouseEvent, useState } from 'react';
import { GenericResponse } from '../types/generic-response';
import Router from 'next/router';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    fetch('http://localhost:8000/api/.user/login', { body: JSON.stringify(user), method: 'POST' }).then(async (response) => {
      const parsedResponse: GenericResponse = await response.json();
      console.log("🚀 ~ fetch ~ parsedResponse", parsedResponse);
      setLoading(false);
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
          <Link href={"/"} className="back"><span className='arrow'>←</span> retour</Link>

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