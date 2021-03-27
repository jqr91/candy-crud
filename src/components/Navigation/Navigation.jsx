import * as React from 'react';
import {Link} from 'react-router-dom';
import storage from '../../services/StorageService';
import { useHistory } from "react-router-dom";
const Navigation = () => {
  
  const history = useHistory();
  const logOut = () => {
    storage.removeFromLocal('loggedIn');
    history.push("/");
  }
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div className="container">
            <a className="navbar-brand" href="#">Bakery Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <Link to="/home" >
                <li className="nav-item active">
                  <span className="nav-link" href="/home">Home </span>
                </li>
                </Link>
                <Link to="/aggiungi">
                <li className="nav-item">
                  <span className="nav-link">Aggiungi</span>
                </li>
                </Link>
                <li className="nav-item">
                  <a onClick={logOut} href=""className="nav-link" >Esci</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  
};

export default Navigation;
