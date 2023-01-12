export interface Users {
    id: string,
    username: string,
    userIdentifier: string,
    roles: string[],
    password: string,
    futureUser: FutureUsers | null;
}

export interface FutureUsers {
    id: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    nationality: string,
    validated: boolean,
    email: string;
}
export interface UserTableWrapper {
    id: string,
    username: string,
    userIdentifier: string,
    action: any;
}