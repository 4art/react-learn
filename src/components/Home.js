import React from 'react'
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing.unit,
    },
});



const Greeting = props => {
    return <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
    >

        <Grid item xs={3}>
            <div className={props.classes.root}>Welcome {props.name}</div>
        </Grid>

    </Grid>

}

Greeting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Greeting);