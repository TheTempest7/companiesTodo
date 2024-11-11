import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companiesReducer } from "06-entities/companies";

const rootReducer = combineReducers({
  companies: companiesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export default store;
