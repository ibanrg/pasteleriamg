import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from "react-redux";
import Layout from './components/Layout';
// Actions
import { showLoading, hideLoading } from './actions';
// Components
import { Home, Productos, Pedidos } from './containers';
import { Loading, MessageDialog } from './components';

import './App.css'

class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/productos' component={Productos} />
                    <Route path='/pedidos' component={Pedidos} />
                </Layout>
                <Loading />
                <MessageDialog />
            </>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        showLoading: value => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading())
    };
};

export default connect(null, mapDispatchToProps)(App);