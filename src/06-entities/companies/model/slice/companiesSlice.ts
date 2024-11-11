import { createSlice } from "@reduxjs/toolkit";

interface ICompaniesState {
  companies: Record<string, string>[];
}

export const initialState: ICompaniesState = {
  companies: [],
};

export const companiesSlice = createSlice<unknown>({
  name: "companies",
  initialState: initialState,
  reducers: {},
});

export const companiesReducer = companiesSlice.reducer;
export const companiesActions = companiesSlice.actions;
