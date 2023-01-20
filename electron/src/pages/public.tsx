import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import '../styles/Home.scss';
import '../styles/CarsList.scss';
import { Car } from '../types/cars';
import { GenericResponse } from '../types/generic-response';

export default function Public() {
    const [cars, setCars] = useState<Car[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('ride_token')) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        // CARS API CALL
        fetch('/api/.car/cars', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ride_token')}`,
            },
        })
            .then(async (response) => {
                const parsedResponse: GenericResponse = await response.json();
                if (parsedResponse.success && parsedResponse.data?.cars) {
                    setCars(parsedResponse.data.cars as Car[]);
                }
            }).catch((error) => {
                console.log("🚀 ~ .then ~ error", error);
            });
    }, [refresh]);

    return (
        <div>
            <HeaderComponent />
            <main className='car-container'>
                <h1>Nos véhicules</h1>
                <p>Choisissez un véhicule pour consulter les détails du modèle et les tarifs.</p>
                <div className='car-list'>
                    {
                        cars.map(x => {
                            return (
                                <div className='car' onClick={() => { navigate('/car/' + x.id); }} key={'car-' + x.id}>
                                    <div className='car-banner' style={{ backgroundImage: `url(${x.img_url})` }}></div>
                                    <div className='car-data'>
                                        <div className='car-name'><p>{x.name}</p></div>
                                        <div className='car-price'>à partir de : <span><b>{x.price}€</b></span></div>
                                    </div>
                                </div>);
                        })
                    }
                </div>
            </main>
        </div>
    );
}