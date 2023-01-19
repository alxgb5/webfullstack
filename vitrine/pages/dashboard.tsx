import { TableComponent, UIButton } from 'my-lib-ui';
import { setLazyProp } from 'next/dist/server/api-utils';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import { LoaderComponent } from '../components/Loader';
import { Car, CarsWrapper } from '../types/cars';
import { GenericResponse } from '../types/generic-response';
import { FutureUsers, Users, UserTableWrapper } from '../types/users';

export default function Dashboard() {

	const [tempUsers, setTempUsers] = useState<Users[]>([]);
	const [tempFutureUsers, setTempFutureUsers] = useState<FutureUsers[]>([]);
	const [tempCars, setTempCars] = useState<Car[]>([])
	const [cars, setCars] = useState<Car[]>([]);
	const [currentTab, setCurrentTab] = useState<number>(0);
	const [users, setUsers] = useState<UserTableWrapper[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [refresh, setRefresh] = useState<boolean>(false);

	useEffect(() => {
		if (!localStorage.getItem('ride_token')) {
			Router.push('/login');
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
			tempDataCars.push({ id: tempCar.id, marque: tempCar.marque, image: tempCar.image, price: tempCar.price, action: <UIButton label='Vérifier' color='primary' onClick={() => { console.log(tempCar.id) }}></UIButton> })
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

	return (
		<div className='dashboard-body'>
			<HeadComponent />
			<HeaderComponent />
			<div className='dashboard-container'>
				<div className="content">
					<h1>GESTION BACK-OFFICE</h1>
					<div className='tab'>
						<button className={`tab-btn + ${currentTab == 0 ? ' current-tab' : ''} `} onClick={() => { setCurrentTab(0); }} key='users'>Liste des utilisateurs inscrits</button>
						<button className={`tab-btn + ${currentTab == 1 ? ' current-tab' : ''} `} onClick={() => { setCurrentTab(1); }} key='vehicles'>Liste des véhicules</button>
					</div>
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
									<TableComponent headers={["Id", "Image", "Marque", "Prix", "Actions"]} rows={cars} />
								</div>

					}
				</div>
			</div>
			<FooterComponent />
		</div>
	);
}