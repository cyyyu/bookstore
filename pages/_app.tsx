import type { AppProps } from "next/app";

import "./globals.css";
import { wrapper } from "@/lib/redux";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
