import React, { Component } from 'react';
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";


import { openDrawer, closeDrawer } from "../../actions"

import "./CustomAppBar.css";

class CustomAppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <AppBar position="sticky" className="appbar">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        className="menu-icon"
                        aria-label="open drawer"
                        onClick={() => this.props.openDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <Typography variant="h5" className="title" noWrap>Meneses Gallardo</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.open,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomAppBar)
