import { UIButton } from 'my-lib-ui'

const HeaderComponent: React.FC = () => {
  return (
    <header className="header">
      <div className="left">
        <img src='/logo.svg' alt='Ride Logo' />

        <p>RIDE</p>
      </div>

      <UIButton label={"Connexion admin"} color={"primary"}></UIButton>
    </header>
  )
}

export default HeaderComponent;