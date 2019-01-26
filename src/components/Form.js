import React, { Component } from 'react';
import { FormControl, InputLabel, Input, Grid, withStyles, Button } from '@material-ui/core';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});
class Form extends Component {
    state = {
        name: "",
        email: "",
        age: 0,
        password: ""
    }
    handleChange = e => {
        e.preventDefault()
        alert(JSON.stringify(this.state))
    }

    handleNumber = val => {
        if(isNaN(+val) || +val < 0){
            return 0
        }
        return +val
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={10}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-simple">Email</InputLabel>
                            <Input id="component-simple" value={this.state.email} onChange={e => this.setState({ ...this.state, email: e.target.value })} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-simple">Name</InputLabel>
                            <Input id="component-simple" value={this.state.name} onChange={e => this.setState({ ...this.state, name: e.target.value })} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-simple">Age</InputLabel>
                            <Input id="component-simple" value={this.state.age} onChange={e => this.setState({ ...this.state, age: this.handleNumber(e.target.value) })} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-simple">Password</InputLabel>
                            <Input id="component-simple" value={this.state.password} type='Password' onChange={e => this.setState({ ...this.state, password: e.target.value })} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl className={classes.formControl}>
                            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleChange}>Submit</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(Form);