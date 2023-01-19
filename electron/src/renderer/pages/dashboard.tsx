import { InputField, Modal, TableComponent, UIButton } from 'my-lib-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, CarsWrapper } from '../../types/cars';
import { GenericResponse } from '../../types/generic-response';
import { FutureUsers, Users, UserTableWrapper } from '../../types/users';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { LoaderComponent } from '../components/Loader';

export default function Dashboard() {

	const navigate = useNavigate();

	const [tempUsers, setTempUsers] = useState<Users[]>([]);
	const [tempFutureUsers, setTempFutureUsers] = useState<FutureUsers[]>([]);
	const [tempCars, setTempCars] = useState<Car[]>([]);
	const [cars, setCars] = useState<Car[]>([]);
	const [currentTab, setCurrentTab] = useState<number>(0);
	const [users, setUsers] = useState<UserTableWrapper[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [refresh, setRefresh] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState<boolean>(false);

	const [carName, setCarName] = useState<string>('');
	const [carPrice, setCarPrice] = useState<number>(0);
	const [carImg, setCarImg] = useState<string>('');

	useEffect(() => {
		if (!localStorage.getItem('ride_token')) {
			navigate('/login');
		}
	}, []);

	useEffect(() => {

		// USERS API CALL
		fetch('/api/.user/users', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('ride_token')}`,
			}
		})
			.then(async (response) => {
				const parsedResponse: GenericResponse = await response.json();
				if (parsedResponse.success && parsedResponse.data?.users) {
					setTempUsers(parsedResponse.data.users as Users[]);
				}
			}).catch((error) => {
				console.log("🚀 ~ .then ~ error", error);
			});

		// FUTURE USERS API CALL
		fetch('/api/.user/future-users', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('ride_token')}`
			}
		})
			.then(async (response) => {
				const parsedResponse: GenericResponse = await response.json();
				if (parsedResponse.success && parsedResponse.data?.futureUsers) {
					setTempFutureUsers(parsedResponse.data.futureUsers as FutureUsers[]);
				}
			}).catch((error) => {
				console.log("🚀 ~ .then ~ error", error);
			});


		// CARS API CALL
		fetch('/api/.car/cars', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('ride_token')}`,
			}
		})
			.then(async (response) => {
				const parsedResponse: GenericResponse = await response.json();
				if (parsedResponse.success && parsedResponse.data?.cars) {
					setTempCars(parsedResponse.data.cars as Car[]);
				}
			}).catch((error) => {
				console.log("🚀 ~ .then ~ error", error);
			});
	}, [refresh]);

	useEffect(() => {
		setLoading(true);
		if (!tempUsers?.length && !tempFutureUsers?.length && !tempCars?.length)
			return;

		const tempData = [] as UserTableWrapper[];
		const tempDataCars = [] as CarsWrapper[];

		for (const tempUser of tempUsers) {
			tempData.push({ statut: '✅ Validé', username: tempUser.username, userIdentifier: tempUser.userIdentifier, nationality: tempUser.futureUser?.nationality || 'n/a', action: <UIButton label='Editer' color='dark' onClick={() => { }}></UIButton> });
		}

		for (const tempFuturUser of tempFutureUsers) {
			tempData.push({ statut: '⚠️ En Attente', username: tempFuturUser.lastname + ' ' + tempFuturUser.firstname, userIdentifier: tempFuturUser.email, nationality: tempFuturUser.nationality, action: <UIButton label='Vérifier' color='primary' onClick={() => { validateUser(tempFuturUser.id); }}></UIButton> });
		}

		for (const tempCar of tempCars) {
			tempDataCars.push({ id: tempCar.id, img_url: tempCar.img_url, name: tempCar.name, price: tempCar.price + '€', action: <UIButton label='Suprimer' color='primary' onClick={() => handleDeleteCar(tempCar.id)}></UIButton> });
		}

		setUsers(tempData);
		setCars(tempDataCars);
		setLoading(false);
	}, [tempUsers, tempFutureUsers, refresh]);

	function validateUser(id: string) {
		fetch(`/api/.user/validate-user/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('ride_token')}`
			},
		}).then(async (response) => {
			const parsedResponse: GenericResponse = await response.json();
			console.log("🚀 ~ validateUser ~ parsedResponse", parsedResponse);

			if (parsedResponse.success) {
				setRefresh(!refresh);
			}
		}, (error) => {
			console.log("🚀 ~ fetch ~ error", error);
		});
	}

	const handleDeleteCar = (carId: string) => {
		fetch(`/api/.car/cars/${carId}`, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('ride_token')}`
			},
		}).then(async (response) => {
			const parsedResponse: GenericResponse = await response.json();
			console.log("🚀 ~ delete car ~ parsedResponse", parsedResponse);

			if (parsedResponse.success) {
				setRefresh(!refresh);
			}
		}, (error) => {
			console.log("🚀 ~ delete ~ error", error);
		});
	};

	function handleModalSubmit() {
		if (!carName || !carImg || !carPrice)
			return;

		fetch('/api/.car/cars', {
			body: JSON.stringify({
				name: carName,
				img_url: carImg,
				price: carPrice
			}),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('ride_token')}`
			},
		}).then(async (response) => {
			const parsedResponse: GenericResponse = await response.json();
			setLoading(false);

			if (parsedResponse.success) {
				setRefresh(!refresh);
				setOpenModal(false);
				setCarImg('');
				setCarName('');
				setCarPrice(0);
			}
		}, (error) => {
			console.log("🚀 ~ fetch ~ error", error);
		});
	}

	return (
		<div className='dashboard-body'>
			<HeaderComponent />
			<div className='dashboard-container'>
				<div className="content">
					<h1>GESTION BACK-OFFICE</h1>
					<div className='tab'>
						<button className={`tab-btn + ${currentTab == 0 ? ' current-tab' : ''} `} onClick={() => { setCurrentTab(0); }} key='users'>Liste des utilisateurs inscrits</button>
						<button className={`tab-btn + ${currentTab == 1 ? ' current-tab' : ''} `} onClick={() => { setCurrentTab(1); }} key='vehicles'>Liste des véhicules</button>
					</div>
					{
						openModal &&
						<Modal setIsOpen={setOpenModal}>
							<div className='add-car-form'>
								<InputField label='Marque' value={carName} onChange={(e) => { setCarName(e.target.value); }} />
								<InputField type='number' label='Prix' value={carPrice} onChange={(e) => { setCarPrice(Number(e.target.value)); }} />
								<InputField label='Image' value={carImg} onChange={(e) => { setCarImg(e.target.value); }} />
								<UIButton label='Enregistrer' color='dark' onClick={() => { handleModalSubmit(); }} />
							</div>
						</Modal>
					}
					{
						loading ?
							<LoaderComponent />
							:
							currentTab === 0 ?
								<div className="dashboard-table-container">
									<TableComponent headers={["Status", "Nom / Prénom", "Coordonnées", "Nationalité", "Actions"]} rows={users} />
								</div>
								:
								<div className="dashboard-table-container">
									<UIButton label='Ajouter un véhicule' color='light' onClick={() => { setOpenModal(true); }} />
									<TableComponent headers={["Id", "Image", "Marque", "Prix", "Actions"]} rows={cars} />
								</div>

					}
				</div>
			</div>
			<FooterComponent />
		</div>
	);
}