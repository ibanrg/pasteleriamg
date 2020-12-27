import React from "react";
import { connect } from "react-redux";
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import { hideMessageDialog } from "../../actions"

import "./MessageDialog.css";

class MessageDialog extends React.Component {

    componentDidMount() { }

    componentWillUnmount() { }

    onClose() {
        this.props.hideMessageDialog();
    }

    render() {
        const { show, message } = this.props;
        return (
            <Dialog
                open={show}
                onClose={this.onClose.bind(this)}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }
}

const mapStatetoProps = state => {
    return {
        show: state.MessageDialogReducer.show,
        message: state.MessageDialogReducer.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hideMessageDialog: () => dispatch(hideMessageDialog())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(MessageDialog);
