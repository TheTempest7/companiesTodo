import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ICompaniesState, INewCompany } from "../types.ts";
import { IChangeTableRowData } from "07-shared/types/componentsTypes.ts";

export const initialState: ICompaniesState = {
  companies: [
    {
      id: uuidv4(),
      checked: false,
      name: "Apple",
      address: "One Apple Park Way, Cupertino, California",
    },
    {
      id: uuidv4(),
      checked: false,
      name: "Microsoft",
      address: "Redmond, Washington, United States",
    },
    {
      id: uuidv4(),
      checked: false,
      name: "Google",
      address: "Mountain View, California, United States",
    },
    {
      id: uuidv4(),
      checked: false,
      name: "Adept",
      address: "Prospekt Gagarina, 27, Pomeshch. 204, Nizhny Novgorod",
    },
  ],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: initialState,
  reducers: {
    changeCompanyData: (
      state,
      { payload: { name, value, id } }: PayloadAction<IChangeTableRowData>,
    ) => {
      const currentIndex = state.companies.findIndex(
        (company) => company.id === id,
      );
      // @ts-expect-error next line
      state.companies[currentIndex][name] = value;
    },
    setAllCheckedStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.companies = state.companies.map((company) => ({
        ...company,
        checked: payload,
      }));
    },
    addNewCompany: (state, { payload }: PayloadAction<INewCompany>) => {
      const newCompanyId = uuidv4();
      state.companies.unshift({
        id: newCompanyId,
        checked: false,
        name: payload.name,
        address: payload.address,
      });
    },
    deleteAllCheckedCompanies: (state) => {
      state.companies = state.companies.filter(
        (company) => company.checked === false,
      );
    },
  },
});

export const companiesReducer = companiesSlice.reducer;
export const companiesActions = companiesSlice.actions;
