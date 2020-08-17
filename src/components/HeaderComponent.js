import React from 'react';
import {Typography, Avatar, Grid, Box} from '@material-ui/core';
import avatar from '../images/kuldeep.jpg'

const HeaderComponent = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="image"/>
        </Box>
    );
}

export default HeaderComponent;