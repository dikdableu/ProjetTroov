import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import PommeDeTerre from "../public/assets/images/pommes-de-terres.jpg"

export default function Card() {
  return (
    <Container className={styles.cardBackground}>
      <Row>
        <Col>
          <Image
            className={styles.cardImage}
            src={PommeDeTerre}
            layout="responsive"
            placeholder="blur"
            alt="pommes-de-terre"
            width="350"
            height="200"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            className={styles.textCard}
          >
            {" "}
            Pommes de terre au four{" "}
          </p>
        </Col>
      </Row>
      <Row className="h-25 d-flex justify-content-end align-items-end ">
        <Col xs="auto" md="auto" lg="auto" className={styles.buttonCard}>
          <a
            onClick={() => {
              console.log("click edit");
            }}
          >
            <Image
              //   className={styles.cardImage}
              src="/assets/icones/editer.png"
              alt="modify"
              width="28"
              height="28"
            />
          </a>
        </Col>
        <Col xs="auto" md="auto" lg="auto">
          <a
            onClick={() => {
              console.log("click clear");
            }}
          >
            <Image
              //   className={styles.cardImage}
              src="/assets/icones/clear.png"
              alt="modify"
              width="28"
              height="28"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
