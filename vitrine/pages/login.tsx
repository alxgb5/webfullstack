import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Link from 'next/link';
import { InputField, PasswordField, UIButton } from 'my-lib-ui';

export default function Login() {
  return (
    <div>
      <HeadComponent />

      <HeaderComponent />

      <main>
        <div className='loginCard'>
          <Link href={"/"} className="back"><span className='arrow'>←</span> retour</Link>

          <div className='loginForm'>
            <h1>Connexion</h1>

            <form>
              <InputField label='identifiant' />
              <PasswordField label='mot de passe' onChange={(e) => { }} value={''} />
              <UIButton label='Connexion' color='primary'/>
            </form>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  )
}