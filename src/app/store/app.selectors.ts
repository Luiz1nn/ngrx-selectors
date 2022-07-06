import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './app.reducer';
import { ICompany, ITruck } from './models';

export const selectApp = createFeatureSelector<IState>('app')

export const selectFirstUser = createSelector(
  selectApp,
  state => state.users?.[0]
)

export const selectCompanies = createSelector(
  selectApp,
  state => state.companies
)

export const selectTrucks = createSelector(
  selectApp,
  state => state.trucks
)

export const selectCompaniesWithTrucks = createSelector(
  selectCompanies,
  selectTrucks,
  (companies, trucks) => {
    return companies?.map(company => ({
      ...company,
      trucks: trucks?.filter(truck => truck.companyId === company.id)
    } as ICompanyWithTrucks))
  }
)

export const selectFirstUserName = createSelector(
  selectFirstUser,
  user => {
    return user?.name
  }
)

export const selectFirstUserCompanies = createSelector(
  selectFirstUser,
  selectCompaniesWithTrucks,
  (user, companies) => companies?.filter(company => company.userId === user?.id)
)

export interface ICompanyWithTrucks extends ICompany {
  trucks: ITruck[]
}
