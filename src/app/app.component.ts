import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Store } from '@ngrx/store';

import { IState } from './store/app.reducer';
import { ICompany, ITruck, IUser } from './store/models';
import * as Actions from './store/app.actions';
import { selectCompaniesWithTrucks, selectFirstUserCompanies, selectFirstUserName } from './store/app.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-selectors';

  constructor (private readonly http: HttpClient, private readonly store: Store<{ app: IState }>) {}

  firstUserName$ = this.store.select(selectFirstUserName)
  firstUserCompanies$ = this.store.select(selectCompaniesWithTrucks)

  ngOnInit (): void {
    this.http.get<IUser[]>('http://localhost:3000/users')
      .subscribe(
        users => this.store.dispatch(Actions.SaveUsers({ users }))
      )

    this.http.get<ICompany[]>('http://localhost:3000/companies')
      .subscribe(
        companies => this.store.dispatch(Actions.SaveCompanies({ companies}))
      )

    this.http.get<ITruck[]>('http://localhost:3000/trucks')
      .subscribe(
        trucks => this.store.dispatch(Actions.SaveTrucks({ trucks }))
      )
  }
}
