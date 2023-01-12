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
        <>
            <HeadComponent />
            <HeaderComponent />
            <div className='dashboard'>
                <h1>GESTION BACK-OFFICE</h1>
                <div style={{ padding: '3rem' }}>
                    <h2>Utilisateur validés</h2>
                    <TableComponent headers={["Status", "Nom / Prénom", "Coordonnées", "Nationalité", "Actions"]} rows={[{ status: "En attente", lastname: "Avagliano", firstname: "Enzo", mail: "eavagliano6@gmail.com", nationality: "Français" }]} />
                </div>
                <div style={{ padding: '3rem' }}>
                    <h2>Utilisateur à valider</h2>
                    <TableComponent headers={["id", "name", "lastname"]} rows={[{ id: '0', firstname: 'enzo', lastname: 'avagliano' }]} />
                </div>
            </div>
            <FooterComponent />
        </>
    );
}