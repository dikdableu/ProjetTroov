import React, {useState, useRef} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/HomePage.module.css";
import Card from "../../components/Card";
import { useContext } from "react";
import {AppContext} from "../../context/context";
import AddButton from "../../components/AddButton";
import ImgButton from "../../components/imgButton";

export default function Accueil(props) {
  const { loginName } = useContext(AppContext);
  console.log(loginName);

  const [show, setShow] = useState(false);
  const handleModal = () => {
    console.log('is clicked')
    setShow(!show)
  };

  const inputLoginRef = useRef();
  const inputPasswordRef = useRef();

  return (
    <>
      {/* Preparation du formulaire d'ajout et de modification modal */}
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter ou Modifier une recette</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col>
                <input
                  id="title"
                  type="text"
                  ref={inputLoginRef}
                  placeholder="Titre de la recette"
                  className={styles.inputTitle}
                />
              </Col>
              <Col>
                <ImgButton />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <Row>
          <Col>
            {/* Title */}
            <p className={styles.titlePage}>
              Bienvenue sur votre espace recette,{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* UserName */}
            <p className={styles.titleUsername}>{loginName} </p>
          </Col>
        </Row>
        <Row className="align-items-center">
          {/* Préparation des Card pour les listes de recettes */}
          <Col xs="auto" md="auto" lg="auto">
            <Card />
          </Col>
          <Col xs="auto" md="auto" lg="auto">
            <Card />
          </Col>
          <Col xs="auto" md="auto" lg="auto">
            <Card />
          </Col>
          <Col xs="auto" md="auto" lg="auto">
            <Card />
          </Col>
          <Col xs="auto" md="auto" lg="auto" onClick={handleModal}>
            <AddButton />
          </Col>
        </Row>
      </Container>
    </>
  );
}
