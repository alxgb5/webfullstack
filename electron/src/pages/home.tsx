import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import CardComponent from '../components/CardComponent';
import FooterComponent from '../components/FooterComponent';
import { InputField, UIButton, EmailField, SelectField, PhoneField, RadioField, CheckboxField } from 'my-lib-ui';
import { FormEvent, useState } from 'react';
import { GenericResponse } from '../types/generic-response';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.scss';
export default function Home() {

    const [lastname, setLastname] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [nationality, setNationality] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!checked) {
            alert('Vous devez attester de votre obtention du permis de conduire');
            return;
        }

        if (lastname === "" || firstname === "" || email === "" || phone === "" || nationality === "") {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone_number: phone,
            nationality: nationality
        };

        console.log(user);
        setLoading(true);
        fetch('http://localhost:8000/api/.user/inscription', {
            body: JSON.stringify(user),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async (response) => {
                const parsedResponse: GenericResponse = await response.json();
                console.log(parsedResponse);
                setLoading(false);

                navigate('/register');
            }).catch((error) => {
                console.log(error);
                setLoading(false);
                alert('Une erreur est survenue, veuillez réessayer plus tard');
            });

    };

    return (
        <div>
            <HeaderComponent />
            <main>
                <BannerComponent />
                <CardComponent title={"Inscription"}>
                    <form className='register' onSubmit={(e) => { handleSubmit(e); }}>
                        <div className='row'>
                            <div className='group'>
                                <RadioField titre='Je suis' onChange={(e) => console.log(e.target.value)} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='group'>
                                <InputField label='Nom' onChange={(e) => setLastname(e.target.value)} value={lastname} />
                            </div>
                            <div className='group'>
                                <InputField label='Prénom' onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='group'>
                                <EmailField label='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='group'>
                                <PhoneField label="Numéro de téléphone" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='group'>
                                <SelectField label='Nationalité' placeholder='Sélectionner une valeur' value={nationality} options={['Francais', 'Anglais', 'Allemand', 'Espagnol']} onChange={(e) => setNationality(e.target.value)} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='group'>
                                <CheckboxField label={"J'atteste que je possède un permis de conduire valide."} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                            </div>
                        </div>

                        <div className='row-right'>
                            <UIButton className='submit-button' disabled={loading} label='Demander mon inscription' color='primary' onClick={() => console.log('test')} type={"submit"} />
                        </div>
                    </form>
                </CardComponent>
            </main>

            <FooterComponent />
        </div>
    );
}
