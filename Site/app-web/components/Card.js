import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ item, modifyButton, deleteButton }) {
  return (
    <Container className={styles.cardBackground}>
      <Row>
        <Col>
          <Image
            className={styles.cardImage}
            src={item.Img}
            layout="responsive"
            alt={item.Title}
            width="350"
            height="200"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={styles.textCard}> {item.Title} </p>
        </Col>
      </Row>
      <Row className="h-25 d-flex justify-content-end align-items-end ">
        <Col xs="auto" md="auto" lg="auto" className={styles.buttonCard}>
          <a
            onClick={() => {
              modifyButton(item.Title, item.Img, item._id);
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
          <a onClick={() => deleteButton(item._id)}>
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
