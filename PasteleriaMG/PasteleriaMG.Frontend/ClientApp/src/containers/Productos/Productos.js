import React, { Component } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { ProductoForm, ProductoLista } from '../../components';

function Productos() {

    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={ProductoLista} />
            <Route exact path={`${path}/nuevo`} component={ProductoForm} />
            <Route exact path={`${path}/editar/:productId`} component={ProductoForm} />
        </Switch>
    );
}

export default Productos;
