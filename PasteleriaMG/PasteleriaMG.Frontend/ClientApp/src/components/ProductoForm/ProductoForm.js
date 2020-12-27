import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormGroup, FormControl, TextField, Button, Grid, Container, Box } from '@material-ui/core';
import * as productService from '../../services/ProductoService';
import { showLoading, hideLoading, showMessageDialog } from "../../actions"

class ProductoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            producto: {
                idExterno: "",
                nombre: "",
                precio: ""
            }
        }
    }

    async saveProducto(e) {
        e.preventDefault();
        this.props.showLoading('Guardando producto...');
        let { producto } = this.state;
        var result = await productService.add(producto);
        this.props.hideLoading();
        if (result) {
            this.clearForm();
            this.props.showMessageDialog("Producto guardado!");
            this.props.history.push('/productos')
        } else {
            this.props.showMessageDialog("Ups! Ocurrió un error durante el guardado");
        }
    }

    clearForm() {
        this.setState({
            producto: {
                idExterno: "",
                nombre: "",
                precio: ""
            }
        });
    }

    onChangeInput(e) {
        let { producto } = this.state;
        producto[e.target.name] = e.target.value;
        this.setState({ producto });
    }

    render() {
        let { producto } = this.state;
        return (
            <Container maxWidth="sm" justify="center">
                <Box mt={2} mb={2}><h4>Producto</h4></Box>
                <Box>
                    <form className="producto-form" noValidate autoComplete="off" onSubmit={this.saveProducto.bind(this)}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                            <Grid container item xs={12} width="100%">
                                <FormControl className="full-width">
                                    <TextField id="id-externo" name="idExterno" label="ID Externo" variant="outlined" color="primary" value={producto.idExterno} onChange={this.onChangeInput.bind(this)} />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12}>
                                <FormControl className="full-width">
                                    <TextField id="nombre" name="nombre" label="Nombre" variant="outlined" color="primary" value={producto.nombre} onChange={this.onChangeInput.bind(this)} />
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12} flex={1}>
                                <FormControl className="full-width">
                                    <TextField id="precio" name="precio" label="Precio" type="number" variant="outlined" color="primary" value={producto.precio} onChange={this.onChangeInput.bind(this)} />
                                </FormControl>
                            </Grid>
                            <Grid item container xs={12} justify="flex-end">
                                <Button variant="contained" color="primary" type="submit" disableElevation>Guardar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showLoading: value => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading()),
        showMessageDialog: value => dispatch(showMessageDialog(value)),
    };
};

export default connect(null, mapDispatchToProps)(ProductoForm);
