import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/HomePage.module.css";
import Card from "../../components/Card";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import AddButton from "../../components/AddButton";
import ImgButton from "../../components/imgButton";
import receiptsController from "../../controllers/receiptsController";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function Accueil(props) {
  const { loginName } = useContext(AppContext);

  const [show, setShow] = useState(false);
  const [idCard, setIdCard] = useState();
  const [isModify, setIsModify] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [listReceipts, setListReceipts] = useState();
  const [imageUpload, setImageUpload] = useState();
  const [nameFile, setNameFile] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (loginName == "") {
      router.push("/Login");
    }
  }, []);

  useEffect(() => {
    receiptsController.getReceiptsDb().then((result) => {
      setListReceipts(result.data);
    });
  }, []);

  //TODO: convert buffer to object to get name image

  const handleModify = (title, img, _id) => {
    setIsModify(true);
    handleNameFile(title);
    setIdCard(_id);
    inputTitleRef.current = title;
    setImageUpload(img);
    handleModal();
  };

  const handleDelete = (_id) => {
    receiptsController.deleteReceiptsDb(_id).then((result) => {
      setListReceipts(result.data);
    });
  };

  const handleModal = () => {
    setShow(!show);
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImageUpload(event.target.result);
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleNameFile = (nameFile) => {
    setNameFile(nameFile);
  };

  const handleSubmit = async () => {
    console.log(isModify);
    if (isModify) {
      await receiptsController
        .updateReceiptsDb(inputTitleRef.current.value, imageUpload, idCard)
        .then((response) => {
          if (response.text == "ok") {
            setListReceipts(response.data);
            setShow(!show);
            toast.success("La recette à bien été modifié !", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              progress: undefined,
            });
            setTimeout(() => {
              setIsModify(false);
            }, 4000);
          } else {
            toast.error("Oops une erreur s'est produite :(", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              progress: undefined,
            });
          }
        });
    } else {
      await receiptsController
        .createReceiptsDb(inputTitleRef.current.value, imageUpload)
        .then((response) => {
          if (response.text == "ok") {
            setListReceipts(response.data);
            setShow(!show);
            toast.success("La recette à bien été ajouté !", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              progress: undefined,
            });
          } else {
            toast.error(
              "Oops une erreur s'est produite, Peut-être que la recette existe déjà ?",
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
    }
  };

  const inputTitleRef = useRef();

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
                  ref={inputTitleRef}
                  placeholder="Titre de la recette"
                  className={styles.inputTitle}
                />
              </Col>
              <Col>
                <ImgButton
                  handleImageUpload={handleImageUpload}
                  handleNameFile={handleNameFile}
                  nameFile={nameFile}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sauvegarder
          </Button>
        </Modal.Footer>
      </Modal>
      {loginName != "" && (
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
            {listReceipts &&
              listReceipts.map((item) => {
                return (
                  <Col xs="auto" md="auto" lg="auto">
                    <Card
                      item={item}
                      modifyButton={handleModify}
                      deleteButton={handleDelete}
                    />
                  </Col>
                );
              })}
            {/* <Col xs="auto" md="auto" lg="auto">
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
            </Col> */}
            <Col
              xs="auto"
              md="auto"
              lg="auto"
              onClick={() => {
                setIsModify(false);
                setShow(!show);
              }}
            >
              <AddButton />
            </Col>
          </Row>
        </Container>
      )}
      <ToastContainer />
    </>
  );
}
