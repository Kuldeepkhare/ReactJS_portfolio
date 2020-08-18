import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import avatar from '../images/kuldeep.jpg';
import Typed from "react-typed";
import NavBarFooterComponent from "./NavBarFooterComponent";

// CSS styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subTitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: '1'
    }
}));
const HeaderComponent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="image"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={['Kuldeep Khare']} typeSpeed={40}/>
            </Typography>
            <Typography className={classes.subTitle} variant="h5">
                <Typed strings={['Fullstack Developer', 'Web Developer', 'MEARN Stack']}
                       typeSpeed={70}
                       backDelay={60}
                       loop
                />
            </Typography>
            <NavBarFooterComponent/>
        </Box>
    );
}

export default HeaderComponent;