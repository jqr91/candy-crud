import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
const AggiungiForm = () => {
    const history = useHistory();
    const [input, setInput] = React.useState({
       
            id: '',
            nome: '',
            prezzo: '',
            quantita: '',
            data_inserimento: '',
            ingredienti: [
                {
                    "nome": "Panna",
                    "quantita": 130,
                    "unita_misura": "g"
                },
            ]
        
    });

    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(input => ({
            ...input,
            [name]: value,
        }))
    }

    const saveUserInput = () => {
        console.log(input);
        input.data_inserimento = Date.now()
        input.id = Math.floor(Math.random() * 100) + 3;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch(`${process.env.REACT_APP_BASE_URL}/dolci`, requestOptions)
            .then(response => {
                if(response) {
                    console.log(response.json())
                    history.push("/home");
                }
            })
    }

    return (
        <div>
            <Jumbotron fluid>
                <Container>

                    <form className="aggiungiForm form">

                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome</label>
                                    <input onChange={(event) => handleUserInput(event)} type="nome" className="form-control"
                                        name="nome" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="prezzo">Prezzo</label>
                                    <input onChange={(event) => handleUserInput(event)} type="prezzo" className="form-control"
                                        name="prezzo" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="quantita">Quantità</label>
                                    <input onChange={(event) => handleUserInput(event)} type="quantita" className="form-control"
                                        name="quantita" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12">
                                <Button onClick={() => saveUserInput()} variant="success">Aggiungi</Button>
                            </div>
                        </div>
                    </form>
                </Container>
            </Jumbotron>

        </div>
    );

}

export default AggiungiForm;