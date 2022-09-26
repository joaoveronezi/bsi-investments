/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import {
    InsideModal,
    ModalButton,
} from "components/SimulationForms/SimulationForms.styles";
import React from "react";
import iconSrc from "assets/icons/bsi-icon.svg";
import { Modal } from "react-bootstrap";

const ModalComponent = ({ show, setShow }) => {

    const handleClose = () => setShow(false);

    return (
        <InsideModal show={show} onHide={handleClose}>
            <Modal.Header>
                <img src={iconSrc} alt="BSI icon" />
            </Modal.Header>
            <Modal.Body>
                <h2>FINANÇAS PESSOAIS</h2>
                <p>
                    Tenha acesso a uma planilha exclusiva para controlar suas finanças
                    junto com um conteúdo exclusivo da BSI para você!
                </p>
                <div>
                    <a
                        href="https://t.me/+e177AwAKBgxkNjhh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ModalButton>Grupo Exclusivo - Welcome BSI</ModalButton>
                    </a>
                    <a
                        href="https://docs.google.com/spreadsheets/d/14EXsHDb3_nR6zUgTtCIpIIASJgCAiu5L/edit?usp=sharing&ouid=114895669418201481568&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ModalButton>Baixe agora a planilha</ModalButton>
                    </a>
                </div>
            </Modal.Body>
        </InsideModal>
    );
};

export default ModalComponent;
