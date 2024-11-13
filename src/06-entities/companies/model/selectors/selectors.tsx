import { RootState } from "07-shared/types/storeTypes.ts";

export const getCompanies = (state: RootState) => state.companies.companies;
