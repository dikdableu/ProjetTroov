import React, { useRef, useState } from "react";
import styles from "../styles/ImgButton.module.css";
import CameraIcon from "../public/assets/icones/camera.png";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ImgButton({ handleImageUpload, handleNameFile, nameFile }) {
  const inputFileRef = useRef();

  const handleFileUpload = (event) => {
    const [file] = event.target.files;
    handleNameFile(file.name);
    handleImageUpload(file);
  };

  return (
    <Row xs="auto" md="auto" lg="auto" className="align-items-center">
      <Col xs="auto" md="auto" lg="auto">
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          accept=".png, .jpg, .jpeg"
        />
        <div
          className={styles.containerButton}
          onClick={() => inputFileRef.current.click()}
        >
          <Image
            src={CameraIcon}
            className={styles.iconButton}
            alt="camera button"
            width="25px"
            height="25px"
          />
        </div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <p>{nameFile}</p>
      </Col>
    </Row>
  );
}
