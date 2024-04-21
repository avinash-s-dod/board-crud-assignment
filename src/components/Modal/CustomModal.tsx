import React, { ReactNode } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import "./styles.css"

interface CustomModalProps {
    className?: string;
    show: boolean;
    onHide: () => void;
    children: ReactNode;
    title: string;
}

export const CustomModal: React.FC<CustomModalProps> = ({ className, show, onHide, children, title }) => {
    return (
        <Modal onHide={onHide}
            className={`common_modal ${className ? className : ""}`}
            show={show}
            centered
        >
            <Modal.Header  onHide={onHide}>
                <h2>{title}</h2>
            </Modal.Header>
            <ModalBody>{children}</ModalBody>
        </Modal>
    );
};
