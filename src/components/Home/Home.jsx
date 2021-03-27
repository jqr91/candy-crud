import React from 'react';
import TableComponent from '../Table/Table';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert'
const Home = () => {
    const [dolci, setDolci] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dolci`);
        const data = await response.json();
        setDolci(data);
    }

    return (
        <div>
            {dolci.length>0 ?  <TableComponent data={dolci} /> : <Alert variant="primary">Aggiungi un dolce alla lista</Alert> }
        </div>

    );

}

export default Home;