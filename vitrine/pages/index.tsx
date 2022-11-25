import HeadComponent from '../components/HeadComponent'
import HeaderComponent from '../components/HeaderComponent'
import BannerComponent from '../components/BannerComponent'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'
import { InputField, UIButton, EmailField, SelectField } from 'my-lib-ui'

export default function Home() {
  return (
    <div>
      <HeadComponent />

      <HeaderComponent />

      <main>
        <BannerComponent />
        <CardComponent title={"Inscription"}>
          <form className='register'>
            <div className='row'>
              <div className='group'>
                <InputField label='Nom' />
              </div>
              <div className='group'>
                <InputField label='Prénom' />
              </div>
            </div>

            <div className='row'>
              <div className='group'>
                <EmailField label='E-mail' />
              </div>
              <div className='group'>
                <EmailField label='E-mail' />
              </div>
            </div>

            <div className='row'>
              <div className='group'>
                <SelectField label='Nationalité' placeholder='Sélectionner une valeur' />
              </div>
            </div>

            <div className='row-right'>
              <UIButton label='Demander mon inscription' color='primary' />
            </div>
          </form>
        </CardComponent>
      </main>

      <FooterComponent />
    </div>
  )
}
