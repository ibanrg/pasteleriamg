import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home, FormProducto, ListaProductos, FormPedido, ListaPedidos } from './containers';

import './App.css'

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/nuevo-producto' component={FormProducto} />
                <Route exact path='/lista-productos' component={ListaProductos} />
                <Route exact path='/nuevo-pedido' component={FormPedido} />
                <Route exact path='/lista-pedidos' component={ListaPedidos} />
            </Layout>
        );
    }
}
