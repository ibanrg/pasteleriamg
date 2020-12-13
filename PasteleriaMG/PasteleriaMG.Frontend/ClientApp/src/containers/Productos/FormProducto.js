import React, { Component } from 'react';
import { FormGroup, FormControl, TextField, Button } from '@material-ui/core';

class FormProducto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idExterno: "",
            nombre: "",
            precio: null,
        }
    }

    guardarProducto() {
        var a = this.state;
        debugger;
    }

    render() {
        return (
            <div>
                <form className="product-form" noValidate autoComplete="off" onSubmit={() => this.saveProducto()}>
                    <FormGroup>
                        <FormControl>
                            <TextField id="id-externo" label="ID Externo" variant="outlined" color="secondary" value={this.state.idExterno} />
                        </FormControl>
                        <FormControl>
                            <TextField id="nombre" label="Nombre" variant="outlined" color="secondary" value={this.state.nombre} />
                        </FormControl>
                        <FormControl>
                            <TextField id="precio" label="Precio" type="number" variant="outlined" color="secondary" value={this.state.precio} />
                        </FormControl>
                    </FormGroup>
                    <Button variant="contained" color="primary" type="submit" disableElevation>Guardar</Button>
                </form>
            </div>
        );
    }
}

export default FormProducto;