import { AppDispatch } from "07-shared/types/storeTypes.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "01-app/store/store.ts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;
