import HeadComponent from '../components/HeadComponent'
import HeaderComponent from '../components/HeaderComponent'
import BannerComponent from '../components/BannerComponent'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'

export default function Home() {
  return (
    <div>
      <HeadComponent />

      <HeaderComponent />

      <main>
        <BannerComponent />
        <CardComponent title={"Inscription"}>
          <p>TODO register form</p>
        </CardComponent>
      </main>

      <FooterComponent />
    </div>
  )
}
