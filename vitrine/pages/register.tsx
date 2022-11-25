import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent'
import BannerComponent from '../components/BannerComponent';
import FooterComponent from '../components/FooterComponent';

export default function Register() {
  return (
    <div>
      <HeadComponent />

      <HeaderComponent />

      <main>
        <BannerComponent />
        <CardComponent title={"Inscription"}>
          <div className='success-register-card'>
            <p className='success-register-message'>Votre demande d’inscription a bien été prise en compte.<br />Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.</p>
            <div className="stores">
              <img className="store" alt="Apple Store" src="/appstore.svg" />
              <img className="store" alt="Google Play" src="/googleplay.svg" />
            </div>
          </div>
        </CardComponent>
      </main>

      <FooterComponent />
    </div>
  )
}