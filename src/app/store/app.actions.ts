import { createAction, props } from '@ngrx/store';
import { ICompany, ITruck, IUser } from './models';

export const SaveUsers = createAction('[Users] SaveUsers', props<{ users: IUser[] }>())
export const SaveCompanies = createAction('[Companies] SaveCompanies', props<{ companies: ICompany[] }>())
export const SaveTrucks = createAction('[Trucks] SaveTrucks', props<{ trucks: ITruck[] }>())
