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
        <CardComponent title={"Inscription"} intro={"Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). <br>Notre expérience est à votre service pour répondre à toutes vos demandes"}>
          <p>testsopsdfskd</p>
        </CardComponent>
      </main>

      <FooterComponent />
    </div>
  )
}