import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { modalActions } from '../../redux/slices/modalSlice';
import { useAppDispatch } from '../../redux/configureStore';

interface MODALDATA {
    isShow?: boolean;
    title: string;
    message: string;
    onClose: any;
    onSubmit: any;
}

export const ModalExample: FC<MODALDATA> = ({ isShow, title, message, onClose, onSubmit }) => {
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        onClose();
        dispatch(modalActions.closeModal());
    }
    const handleClose = () => {
        onSubmit();
        dispatch(modalActions.closeModal());
    }
    return (
        <Modal show={isShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export const ModalExample2: FC<MODALDATA> = ({ title, message, onClose, onSubmit }) => {
    const [show, setShow] = useState(false);
    const handleSubmit = () => {
        onClose();
        setShow(false);
    }
    const handleClose = () => {
        onSubmit();
        setShow(false);
    }
    return (
        <>
        <Button variant="primary" onClick={() => setShow(true)}>
            Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export const Modals = {
    ModalExample,
    ModalExample2,
};