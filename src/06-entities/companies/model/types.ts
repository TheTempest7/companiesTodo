export interface ICompany {
  id: Uint8Array | string;
  checked: boolean;
  name: string;
  address: string;
}

export interface ICompaniesState {
  companies: ICompany[];
}

export interface INewCompany {
  name: string;
  address: string;
}
