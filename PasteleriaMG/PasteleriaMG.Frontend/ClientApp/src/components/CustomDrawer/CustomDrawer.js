import React, { Component } from 'react';
import { connect } from "react-redux";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { closeDrawer } from "../../actions"

import {
    Link
} from "react-router-dom";

import logo from '../../images/logo.png';

import "./CustomDrawer.css";

class CustomDrawer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer anchor="left" className="drawer" open={this.props.open} onClose={() => this.props.closeDrawer()} >
                <div
                    className="menu-list"
                    role="presentation"
                    onClick={() => this.props.closeDrawer()}
                    onKeyDown={() => this.props.closeDrawer()}
                >
                    <div className="drawer-logo">
                        <img src={logo} />
                    </div>
                    <List>
                        <ListSubheader>Pedidos</ListSubheader>
                        <Link to="lista-pedidos">
                            <ListItem button key="lista-pedidos">
                                <ListItemIcon><ListIcon /></ListItemIcon>
                                <ListItemText primary="Lista pedidos" />
                            </ListItem>
                        </Link>
                        <Link to="nuevo-pedido">
                            <ListItem button key="nuevo-pedido">
                                <ListItemIcon><AddIcon /></ListItemIcon>
                                <ListItemText primary="Nuevo pedido" />
                            </ListItem>
                        </Link>
                        <ListSubheader>Productos</ListSubheader>
                        <Link to="lista-productos">
                            <ListItem button key="lista-productos">
                                <ListItemIcon><ListIcon /></ListItemIcon>
                                <ListItemText primary="Lista productos" />
                            </ListItem>
                        </Link>
                        <Link to="nuevo-producto">
                            <ListItem button key="nuevo-producto">
                                <ListItemIcon><AddIcon /></ListItemIcon>
                                <ListItemText primary="Nuevo producto" />
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.DrawerReducer.open,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
