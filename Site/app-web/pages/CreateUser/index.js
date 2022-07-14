import React, {useState, useRef} from "react";
import styles from "../../styles/Login.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import userController from "../../controllers/userController";

export default function CreateUser() {

  const inputLoginRef = useRef();
  const inputPasswordRef = useRef();

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
              <p className={styles.title}>Créer un compte dès maintenant </p>
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
              <button
                className={styles.buttonLogin}
                id="validate"
                onClick={() => {
                  userController
                    .createUserDb(
                      inputLoginRef.current.value,
                      inputPasswordRef.current.value
                    )
                    .then((response) => {
                      console.log(response);
                    });
                }}
              >
                {" "}
                Validate{" "}
              </button>
            </Row>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
