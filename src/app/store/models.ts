export interface IUser {
  id: number
  name: string
}

export interface ICompany {
  id: number
  userId: number
  name: string
}

export interface ITruck {
  id: number
  companyId: number
  brand: string
}
