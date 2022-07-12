import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  // Importation de bootstrap pour le projet
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
