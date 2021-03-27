import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Login from '../components/Login/Login';
import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';
import AggiungiForm from '../components/Forms/AggiungiForm';
class Container extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className="container">
                    <div className="row mt-2">
                        <div className="col-lg-12 text-center">

                            <Route exact path="/aggiungi" component={AggiungiForm} />
                            <Route exact path="/home" component={Home} />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;