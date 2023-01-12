import { TableComponent } from 'my-lib-ui';
import { useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import { GenericResponse } from '../types/generic-response';
export default function Dashboard() {

	const [users, setUsers] = useState<{}[]>([]);
	const [futureUsers, setFutureUsers] = useState<any[]>([]);
	const [token, setToken] = useState<String>('');
	const [currentTab, setCurrentTab] = useState<number>(0);
	useEffect(() => {
		localStorage.getItem('ride_token') && setToken(localStorage.getItem('ride_token') as String);
	}, []);

	useEffect(() => {
		if (token !== '') {
			fetch('http://localhost:8000/api/.user/users')
				.then(async (response) => {
					const parsedResponse: GenericResponse = await response.json();
					if (parsedResponse.success && parsedResponse.data?.users) {
						setUsers(parsedResponse.data.users);
					}
				}).catch((error) => {
					console.log("🚀 ~ .then ~ error", error);
				});

			fetch('http://localhost:8000/api/.user/future-users')
				.then(async (response) => {
					const parsedResponse: GenericResponse = await response.json();
					if (parsedResponse.success && parsedResponse.data?.futureUsers) {
						setFutureUsers(parsedResponse.data.futureUsers);
					}
				}).catch((error) => {
					console.log("🚀 ~ .then ~ error", error);
				});
		}
	}, []);

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
					{currentTab === 0 ?
						<div className="dashboard-table-container">
							<TableComponent headers={["Status", "Nom / Prénom", "Coordonnées", "Nationalité", "Actions"]} rows={[{ status: "En attente", name: "AVAGLIANO Enzo", mail: "eavagliano6@gmail.com 0606060606", nationality: "Français", actions: 'Vérifier' }]} />
						</div>
						:
						<div className="dashboard-table-container">
							<TableComponent headers={["Marque", "Modèle", "Actions"]} rows={[{ marque: 'BMW', modele: 'I8', actions: 'Modifier' }]} />
						</div>
					}

				</div>
			</div>
			<FooterComponent />
		</div>
	);
}