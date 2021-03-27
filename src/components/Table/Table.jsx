import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import ModalComponent from '../Modal';
import Info from '../Info';
const TableComponent = (props) => {
    const [show, setShow] = useState(false);
    const [item, setItem] = useState([]);

    const handleShow = (item) => {
        setItem(item);
        setShow(true);
    };

    const handleRemove = (item) => {
        if (window.confirm('Sei sicuro di volere rimuovere il dolce?')) {
            console.log(item);
            return fetch(`${process.env.REACT_APP_BASE_URL}/dolci/` + item.id, {
                method: 'delete'
            })
                .then(response => {
                    if (response) {
                        window.location.reload();
                    }
                });
        }
    };

    const handleClose = () => {
        setShow(false);
    }
    const convertDate = (data) => {
        return new Date(data).toLocaleDateString();
    }

    const isVendibile = (data, prezzo) => {
        const dateNow = new Date().getDate();
        const dataInserimento = new Date(data).getDate();
        let isVendibile = {
            prezzoScontato: '',
            vendibile: ''
        }
        if (dataInserimento === dateNow) {
            //applica percentuale 0
            return isVendibile = {
                prezzoScontato: percentuale('0', prezzo),
                vendibile: 'Si'
            }
        } else if (dataInserimento === daysOfWeek(1)) {
            // applica percentuale 20
            return isVendibile = {
                prezzoScontato: percentuale('20', prezzo),
                vendibile: 'Si'
            }
        } else if (dataInserimento === daysOfWeek(2)) {
            // applica percentuale 80
            return isVendibile = {
                prezzoScontato: percentuale('80', prezzo),
                vendibile: 'Si'
            }
        } else {
            // oggetto ritirato
            return isVendibile = {
                prezzoScontato: 0,
                vendibile: 'No'
            }
        }
    }

    const daysOfWeek = (days) => {
        const d = new Date();
        return new Date(d.setDate(d.getDate() - days)).getDate()
    }

    const percentuale = (percentuale, totale) => {
        return (totale - ((totale / 100) * percentuale)).toFixed(2)
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Dolce</th>
                        <th>Prezzo</th>
                        <th>Disponibilità</th>
                        <th>Data Inserimento</th>
                        <th>Vendibile</th>
                        <th>Prezzo Scontato</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>

                    {props.data.map((item, index) => (

                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.prezzo}</td>
                            <td>{item.quantita}</td>
                            <td>{convertDate(item.data_inserimento)}</td>
                            <td>{isVendibile(item.data_inserimento, item.prezzo).vendibile}</td>
                            <td>{isVendibile(item.data_inserimento, item.prezzo).prezzoScontato}</td>
                            <td>
                                <Button onClick={() => handleShow(item.ingredienti)} variant="info" > <i className="fa fa-eye"></i></Button>
                                <Button className="ml-1" onClick={() => handleRemove(item)} variant="danger" > <i className="fa fa-trash"></i></Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <ModalComponent title="Lista Ingredienti" onHide={handleClose} onClick={handleClose} show={show}><Info items={item} /></ModalComponent>
        </div>
    );

}

export default TableComponent;