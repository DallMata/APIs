import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';

export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cancelar Turno
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>¿Desea cancelar el turno?</h4>
          <p>
            Advertencia: Si confirma la cancelación del turno, perderá la reserva del mismo, y deberá buscar una nueva fecha para su atención.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.Hiden}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    );
}