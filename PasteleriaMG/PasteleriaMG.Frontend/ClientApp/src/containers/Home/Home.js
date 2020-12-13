import React, { Component } from 'react';
import logo from '../../images/logo.png';

import "./Home.css";

class Home extends Component {



    render() {
        return (
            <div class="logo-container">
                <img src={logo} />
                <br />
                <br />
                <h2>Gestión de pedidos</h2>
            </div>
        );
    }
}

export default Home;