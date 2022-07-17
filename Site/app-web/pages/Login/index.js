import React, { useRef, useContext } from "react";
import styles from "../../styles/Login.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import userController from "../../controllers/userController";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Login() {
  const inputLoginRef = useRef();
  const inputPasswordRef = useRef();
  const router = useRouter();
  const { loginName, setLoginName } = useContext(AppContext);

  return (
    <div className={styles.containerParent}>
      <Container className="h-100 w-100 " fluid>
        <Row className="h-100 d-flex flex-column justify-content-center align-items-center">
          <Row className="justify-content-center align-items-center">
            <Row
              xs="auto"
              md="auto"
              lg="auto"
              className="justify-content-center align-items-center"
            >
              <p className={styles.title}>
                Connectez vous pour accéder au site{" "}
              </p>
            </Row>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Row
              xs="auto"
              md="auto"
              lg="auto"
              className="justify-content-center align-items-center"
            >
              <input
                id="login"
                type="text"
                ref={inputLoginRef}
                placeholder="Login"
                className={styles.containerLogin}
              />
            </Row>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Row
              xs="auto"
              md="auto"
              lg="auto"
              className="justify-content-center align-items-center"
            >
              <input
                id="password"
                type="password"
                ref={inputPasswordRef}
                placeholder="Password"
                className={styles.containerPassword}
              />
            </Row>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Row
              xs="auto"
              md="auto"
              lg="auto"
              className="justify-content-center align-items-center"
            >
              <Link href="/CreateUser">
                <a className={styles.lien}> Créer un compte </a>
              </Link>
            </Row>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Row
              xs="auto"
              md="auto"
              lg="auto"
              className="justify-content-center align-items-end"
            >
              <button
                className={styles.buttonLogin}
                id="validate"
                onClick={() => {
                  userController
                    .findUserDb(
                      inputLoginRef.current.value,
                      inputPasswordRef.current.value
                    )
                    .then((response) => {
                      if (response == "ok") {
                        toast.success("Bienvenue !", {
                          position: "bottom-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          progress: undefined,
                        });
                        setLoginName(inputLoginRef.current.value);
                        setTimeout(() => {
                          router.push("/Home");
                        }, 4000);
                      } else {
                        toast.error(
                          "Oops une erreur s'est produite, vous êtes vous trompé ?",
                          {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            progress: undefined,
                          }
                        );
                      }
                    });
                }}
              >
                {" "}
                Validate{" "}
              </button>
              <ToastContainer />
            </Row>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
