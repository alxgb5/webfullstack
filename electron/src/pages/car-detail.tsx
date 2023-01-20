import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import '../styles/Home.scss';
import '../styles/CarsList.scss';
import { Car } from '../types/cars';
import { GenericResponse } from '../types/generic-response';

export default function CarDetail() {
    const [car, setCar] = useState<Car>();
    const [refresh, setRefresh] = useState<boolean>(false);
    const id = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        console.log("🚀 ~ CarDetail ~ id", id);
        if (!localStorage.getItem('ride_token')) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        // CARS API CALL
        fetch('/api/.car/cars/' + id.id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ride_token')}`,
            },
        })
            .then(async (response) => {
                const parsedResponse: GenericResponse = await response.json();
                if (parsedResponse.success && parsedResponse.data?.car) {
                    console.log("🚀 ~ .then ~ parsedResponse.data.car", parsedResponse.data.car);
                    setCar(parsedResponse.data.car as Car);
                }
            }).catch((error) => {
                console.log("🚀 ~ .then ~ error", error);
            });
    }, []);

    return (
        <div>
            <HeaderComponent />
            <Link className='link' to={'/'}>Retourner à la liste des véhicules</Link>
            <main className='car-container'>
                <h1>{car?.name}</h1>
                <p>Découvrez notre véhicule premium.</p>
                {car &&
                    <div className='car big'>
                        <div className='car-banner' style={{ backgroundImage: `url(${car?.img_url})` }}></div>
                        <div className='car-data'>
                            <div className='car-name'><p>{car?.name}</p></div>
                            <div className='car-price'>à partir de : <span><b>{car?.price}€</b></span></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quod, repellendus earum odit, dolores dicta eaque quas reiciendis vitae tempore ab veniam, eos error? Nobis harum accusantium minus ratione repellat!</p>
                    </div>
                }
            </main>
        </div>
    );
}