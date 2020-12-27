import React, { Component } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { PedidoForm, PedidoLista } from '../../components';

function Pedidos() {

    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={PedidoLista} />
            <Route exact path={`${path}/nuevo`} component={PedidoForm} />
            <Route exact path={`${path}/editar/:pedidoId`} component={PedidoForm} />
        </Switch>
    );
}

export default Pedidos;
