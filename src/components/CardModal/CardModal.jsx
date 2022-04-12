/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CardContainer } from "./CardModal.style";

const CardModal = ({ info, title, imageSRC }) => {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <CardContainer onClick={() => setSmShow(true)} style={{ backgroundImage: `${imageSRC}` }}>
        <h2>{title}</h2>
      </CardContainer>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"

      >
        <Modal.Header closeButton style={{ backgroundColor: "#6C3EA4", fontSize: window.innerWidth < 540 ? "18px" : "24px", color: "white" }}>
          <Modal.Title id="example-modal-sizes-title-sm">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#6C3EA4", fontSize: window.innerWidth < 540 ? "18px" : "24px", color: "white" }}>{info}</Modal.Body>
      </Modal>

    </>
  );
};

export default CardModal;
