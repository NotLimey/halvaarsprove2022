import { IUser } from "./types";

// USER

export const SET_USER = "SET_USER";

export type ActionTypes = 
    | {type: typeof SET_USER; payload: IUser}

export const setUser = (user : IUser): ActionTypes => ({type: SET_USER, payload: user});