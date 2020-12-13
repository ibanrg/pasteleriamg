import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container } from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import { CustomAppBar, CustomDrawer } from "./";

import "./Layout.css";

class Layout extends Component {
    static displayName = Layout.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CustomAppBar />
                <CustomDrawer />
                <Grid container justify="center">
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

export default Layout;
