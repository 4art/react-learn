import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Axios from 'axios';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class OrderList extends Component {

    state = {
        orders: []
    }
    id = 0;
    createData = (name, count) => {
        this.id += 1;
        var id = this.id
        return { id, name, count };
    }

    rows = [
        this.createData('Frozen yoghurt', 1),
        this.createData('Ice cream', 1),
        this.createData('Eclair', 1),
        this.createData('Cupcake', 1),
        this.createData('Gingerbread', 1),
    ];

    componentDidMount = () => {
        Axios.get('http://localhost:3333/orders')
            .then(response => {
                console.log(response)
                this.setState({ ...this.state, orders: response.data ? response.data : [] })
            })
    }

    render() {
        const { classes } = this.props;
        console.log(this.state)
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Count</TableCell>
                            <TableCell align='left'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.orders.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="link">{row.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="link">{row.count}</TableCell>
                                <TableCell align="link">
                                    <Button variant="contained" color="primary" className={classes.button}>Edit</Button>
                                    <Button variant="contained" color="secondary" className={classes.button}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

}
OrderList.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(OrderList);