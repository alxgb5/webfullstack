import '../styles/BannerComponent.scss';

const BannerComponent: React.FC = () => {
  return (
    <section className="banner">
      <div>
        <p className="intro">
          <span className="arrow">▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). <br />Notre expérience est à votre service pour répondre à toutes vos demandes
        </p>
        <hr className="divider" />
      </div>
    </section>
  );
};

export default BannerComponent;