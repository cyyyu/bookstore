/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { createWrapper } from "next-redux-wrapper";

/* Instruments */
import { reducer } from "./rootReducer";
import { middleware } from "./middleware";

export const createReduxStore = (preloadedState: any) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(middleware);
    },
    preloadedState,
  });

let store: ReturnType<typeof createReduxStore> | null;
export const initializeStore = (preloadedState: any) => {
  let _store = store ?? createReduxStore(preloadedState);

  if (preloadedState && store) {
    _store = createReduxStore({ ...store.getState(), ...preloadedState });
    store = null;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
};
export const wrapper = createWrapper<ReduxStore>(createReduxStore);
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = ReturnType<typeof createReduxStore>;
export type ReduxState = ReturnType<ReduxStore["getState"]>;
export type ReduxDispatch = ReduxStore["dispatch"];
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
