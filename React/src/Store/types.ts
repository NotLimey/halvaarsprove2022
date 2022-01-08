export interface IUser {
    id?: string;
    name?: string;
    email?: string;
}

export interface IEmployee {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
    image?: string;
}

export interface Store {
    user: IUser,
    employees: IEmployee[]
}