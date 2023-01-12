import { TableComponent, UIButton } from 'my-lib-ui';
import { setLazyProp } from 'next/dist/server/api-utils';
import { useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeadComponent from '../components/HeadComponent';
import HeaderComponent from '../components/HeaderComponent';
import { GenericResponse } from '../types/generic-response';
import { FutureUsers, Users, UserTableWrapper } from '../types/users';

export default function Dashboard() {

    const [tempUsers, setTempUsers] = useState<Users[]>([]);
    const [tempFutureUsers, setTempFutureUsers] = useState<FutureUsers[]>([]);
    const [token, setToken] = useState<string>('');
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [users, setUsers] = useState<UserTableWrapper[]>([]);

    useEffect(() => {
        const item = localStorage.getItem('ride_token');
        setToken(item as string);
    }, []);

    useEffect(() => {

        console.log("🚀 ~ useEffect ~ token", token);

        fetch('http://localhost:8000/api/.user/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ride_token')}`
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

        fetch('http://localhost:8000/api/.user/future-users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
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
    }, []);

    useEffect(() => {
        if (!tempUsers?.length && !tempFutureUsers?.length)
            return;

        const tempData = [] as UserTableWrapper[];

        for (const tempUser of tempUsers) {
            tempData.push({ id: tempUser.id, username: tempUser.username, userIdentifier: tempUser.userIdentifier, action: <UIButton label='Valider' color='dark' onClick={() => { validateUser(tempUser.id); }}></UIButton> });
        }

        for (const tempFuturUser of tempFutureUsers) {
            tempData.push({ id: tempFuturUser.id, username: tempFuturUser.lastname + ' ' + tempFuturUser.firstname, userIdentifier: tempFuturUser.email, action: <UIButton label='Valider' color='dark' onClick={() => { validateUser(tempFuturUser.id); }}></UIButton> });
        }

        setUsers(tempData);
    }, [tempUsers, tempFutureUsers]);

    function validateUser(id: string) {
        fetch(`http://localhost:8000/api/.user/validate-user/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async (response) => {
            const parsedResponse: GenericResponse = await response.json();

            if (parsedResponse.success && parsedResponse.data) {
                console.log('success');
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
                    {currentTab === 0 ?
                        <div className="dashboard-table-container">
                            <TableComponent headers={["Status", "Nom / Prénom", "Coordonnées", "Nationalité", "Actions"]} rows={users} />
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