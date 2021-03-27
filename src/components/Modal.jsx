import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
const ModalComponent = (props) => {
    console.log(props);
    const [value, setValue] = React.useState({ ...props });

    useEffect(() => {
        setValue(props);
    }, [props])


    return (
        <div>
            <Modal show={value.show} onHide={() => props.onHide()} >
                <Modal.Header closeButton>
                    <Modal.Title>{value.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {value.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.onClick()} variant="secondary">Chiudi</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );


};

export default ModalComponent;