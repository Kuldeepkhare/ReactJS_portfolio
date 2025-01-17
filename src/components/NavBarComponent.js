import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import avatar from '../images/kuldeep.jpg';
import {makeStyles} from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import NavBarFooterComponent from './NavBarFooterComponent';

//CSS styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100rem'
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}));

const NavBarComponent = () => {

    const menuItems = [{
        listIcon: <Home/>,
        listText: "Home"
    }, {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    }, {
        listIcon: <Apps/>,
        listText: "Portfolio"
    }, {
        listIcon: <ContactMail/>,
        listText: "Contact"
    }];
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }
    const classes = useStyles();
    const slideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Image"></Avatar>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lsItem.listText} className={classes.listItem}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: '#222'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: 'tomato'}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: 'tan'}}>Portfolio</Typography>
                        <MobilRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}>
                            {slideList("right")}
                            <NavBarFooterComponent/>
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavBarComponent;