import React from 'react';
import NavBarComponent from "./NavBarComponent";
import HeaderComponent from "./HeaderComponent";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute',
        opacity: '0.5'
    }
})
const HomeComponent = () => {
    const classes = useStyles();
    return (
        <>
            <NavBarComponent/>
            <HeaderComponent/>
            <Particles
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'tomato'
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            }
                        }
                    }
                }
                }/>
        </>
    );
}

export default HomeComponent;