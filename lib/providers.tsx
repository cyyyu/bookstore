"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { wrapper } from "@/lib/redux";

export const Providers = (props: React.PropsWithChildren) => {
  const { store } = wrapper.useWrappedStore({});
  return <Provider store={store}>{props.children}</Provider>;
};
