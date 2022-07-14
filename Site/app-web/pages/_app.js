import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import  AppProvider  from '../context/context';

function MyApp({ Component, pageProps }) {


  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
