import { createReducer, on } from '@ngrx/store';
import * as Actions from './app.actions'
import { ICompany, ITruck, IUser } from './models';

export interface IState {
  users?: IUser[],
  companies?: ICompany[],
  trucks?: ITruck[]
}

const initialState: IState = {}

export const reducer = createReducer(
  initialState,
  on(Actions.SaveUsers, (state, { users }) => {
    state = {
      ...state,
      users
    }
    return state
  }),
  on(Actions.SaveCompanies, (state, { companies }) => {
    state = {
      ...state,
      companies
    }
    return state
  }),
  on(Actions.SaveTrucks, (state, { trucks }) => {
    state = {
      ...state,
      trucks
    }
    return state
  })
)
