import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/HomePage.module.css";
import Card from "../../components/Card";
import { useContext } from "react";
import {AppContext} from "../../context/context";

export default function Accueil(props) {
  const { loginName } = useContext(AppContext);
  console.log(loginName);
  return (
    <>
      {/* Preparation du formulaire d'ajout et de modification modal */}
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                .col-xs-12 .col-md-8
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
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
        <Row>
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
        </Row>
      </Container>
    </>
  );
}
