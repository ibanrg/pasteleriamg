import React from "react";
import { connect } from "react-redux";
import { CircularProgress, Paper, Typography, Grid } from '@material-ui/core';

import "./Loading.css";

class Loading extends React.Component {
    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        const { show, message } = this.props;
        return (
            show && (
                <div className="loader-container">
                    <Paper className="spinner-container">
                        <Grid container direction='column' justify="center" alignItems="center" spacing={1}>
                        <Grid item><CircularProgress size={30}/></Grid>
                        <Grid item><Typography variant="body2" color="primary">{message}</Typography></Grid>
                    </Grid>
                    </Paper>
                </div>
            )
        );
    }
}

const mapStatetoProps = state => {
    return {
        show: state.LoadingReducer.loading,
        message: state.LoadingReducer.message
    };
};

export default connect(mapStatetoProps)(Loading);
