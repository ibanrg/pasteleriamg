import React, { Component } from 'react';
import { connect } from "react-redux";
import { Drawer, List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { closeDrawer } from "../../actions"

import { Link } from "react-router-dom";

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
                        <Link to="/"><img src={logo} /></Link>
                    </div>
                    <List>
                        <ListSubheader>Pedidos</ListSubheader>
                        <Link to="/pedidos">
                            <ListItem button key="lista-pedidos">
                                <ListItemIcon><ListIcon /></ListItemIcon>
                                <ListItemText primary="Lista pedidos" />
                            </ListItem>
                        </Link>
                        <Link to="/pedidos/nuevo">
                            <ListItem button key="nuevo-pedido">
                                <ListItemIcon><AddIcon /></ListItemIcon>
                                <ListItemText primary="Nuevo pedido" />
                            </ListItem>
                        </Link>
                        <ListSubheader>Productos</ListSubheader>
                        <Link to="/productos">
                            <ListItem button key="lista-productos">
                                <ListItemIcon><ListIcon /></ListItemIcon>
                                <ListItemText primary="Lista productos" />
                            </ListItem>
                        </Link>
                        <Link to="/productos/nuevo">
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
