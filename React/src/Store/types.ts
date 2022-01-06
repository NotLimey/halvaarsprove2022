export interface IUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    bio?: string;
    username?: string;
    companyRole?: string;
    isVerified?: boolean;
    isEmailVerified?: boolean;
    accessLevel?: number;
    areas?: string[];
    created?: Date;
    lastUpdated?: Date;
    lastLoggedIn?: Date;
}

export interface Store {
    user: IUser
}