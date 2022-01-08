import { IEmployee, IUser } from "./types";


export type ActionTypes = 
    | {type: typeof SET_USER; payload: IUser }
    | {type: typeof SET_EMPLOYEES; payload: IEmployee[] }

// USER

export const SET_USER = "SET_USER";
export const setUser = (user : IUser): ActionTypes => ({type: SET_USER, payload: user});


// EMPLOYEES

export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const setEmployees = (employees : IEmployee[]): ActionTypes => ({type: SET_EMPLOYEES, payload: employees});