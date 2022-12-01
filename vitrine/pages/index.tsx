import HeadComponent from '../components/HeadComponent'
import HeaderComponent from '../components/HeaderComponent'
import BannerComponent from '../components/BannerComponent'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'
import { InputField, UIButton, EmailField, SelectField, PhoneField, RadioField, CheckboxField } from 'my-lib-ui'
import { FormEvent } from 'react'
import Router from 'next/router'

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/register');
  }

  return (
    <div>
      <HeadComponent />

      <HeaderComponent />

      <main>
        <BannerComponent />
        <CardComponent title={"Inscription"}>
          <form className='register' onSubmit={(e) => { handleSubmit(e) }}>
            <div className='row'>
              <div className='group'>
                <RadioField label='Je suis' radios={[{ label: 'une entreprise', value: 'company', checked: true }, { label: 'une personne', value: 'person', checked: false }]} />
              </div>
            </div>

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
                <EmailField label='E-mail' value={""} />
              </div>
              <div className='group'>
                <PhoneField label="Numéro de téléphone" />
              </div>
            </div>

            <div className='row'>
              <div className='group'>
                <SelectField label='Nationalité' placeholder='Sélectionner une valeur' />
              </div>
            </div>

            <div className='row'>
              <div className='group'>
                <CheckboxField label={"J'atteste que je possède un permis de conduire valide."} checked={false} />
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
