// React
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as _ from 'lodash';
// Material-UI
import { withTheme } from '@material-ui/core/styles';
import { Container, Box, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// Actions
import { showLoading, hideLoading, showMessageDialog, productosLoaded } from '../../actions';
// Services
import * as productService from '../../services/ProductoService';


class ProductoLista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: null
        }
        this.columns = this.getColumns();
        this.styles = {
            tableHeader: {
                color: props.theme.palette.primary.main,
                fontWeight: 'bold'
            },
            tableContainer: {
                maxHeight: '80vh',
            },
            tableCell: {
                whiteSpace: 'normal',
                wordWrap: 'break-word'
            },
            fab: {
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
            }
        }
    }

    async componentDidMount() {
        this.props.showLoading('Cargando productos...');
        await this.loadProductos();
        this.props.hideLoading();
    }

    async componentDidUpdate(prevProps) {
    }

    async loadProductos() {
        var productos = await productService.getAll(this.state);
        if (!_.isEqual(productos, this.props.productos)) {
            this.props.productosLoaded(productos);
        }
    }

    getHeaderCellStyle(column) {
        return column ? {
            ...this.styles.tableHeader,
            width: column.width,
            minWidth: column.minWidth,
        } : this.styles.tableCell;
    }

    getCellStyle(column) {
        return column ? {
            ...this.styles.tableCell,
            width: column.width,
            minWidth: column.minWidth,
        } : this.styles.tableCell;
    }



    getColumns() {
        return [
            { id: 'idExterno', label: 'ID Externo', minWidth: 120, width: 150 },
            { id: 'nombre', label: 'Nombre' },
            { id: 'precio', label: 'Precio', align: 'right', minWidth: 120, width: 100 },
            { id: 'botones', label: '', align: 'right', minWidth: 100, width: 100 },
        ];
    }

    onClickEdit(producto) {

    }

    async onClickDelete(producto) {
        this.props.showLoading('Eliminando producto...');
        var result = await productService.remove(producto);
        if (result) {
            this.props.showLoading("Cargando productos...");
            await this.loadProductos();
        } else {
            this.props.showMessageDialog("Ups! Ocurrió un error durante el borrado");
        }
        this.props.hideLoading();
    }

    render() {
        let { productos } = this.props;
        return (
            <Container maxWidth="md" justify="center">
                <Box mt={2} mb={2} display="flex">
                    <Box width="100%"><h4>Productos</h4></Box>
                    <Box flexShrink={0}><Link to="/productos/nuevo"><Button variant="contained" color="primary">Nuevo producto</Button></Link></Box>
                </Box>
                <Paper>
                    <TableContainer style={this.styles.tableContainer}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {this.columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={this.getHeaderCellStyle(column)}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productos && productos.map((producto) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={producto.code}>
                                            {this.columns.map((column) => {
                                                if (column.id != 'botones') {
                                                    const value = producto[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} style={this.getCellStyle(column)}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell key='actions' align='right' style={this.getHeaderCellStyle(column)}>
                                                            <Grid container spacing={1} justify='right' alignItems='right'>
                                                                <Grid item><IconButton size='small' onClick={() => this.onClickEdit(producto)}><EditIcon /></IconButton></Grid>
                                                                <Grid item><IconButton size='small' onClick={() => this.onClickDelete(producto)}><DeleteIcon /></IconButton></Grid>
                                                            </Grid>
                                                        </TableCell>)
                                                }
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Link to="/productos/nuevo">
                    <Fab size="medium" color="secondary" aria-label="add" style={ this.styles.fab }>
                        <AddIcon />
                    </Fab>
                </Link>
            </Container>
        );
    }
}

const mapStatetoProps = state => {
    return {
        productos: state.ProductoReducer.productos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showLoading: value => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading()),
        showMessageDialog: value => dispatch(showMessageDialog(value)),
        productosLoaded: value => dispatch(productosLoaded(value)),
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(withTheme(ProductoLista));
