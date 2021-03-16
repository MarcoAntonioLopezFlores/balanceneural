import React from 'react';
import { Grid} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../assets/img/logo.png'
import {Link as Links} from 'react-scroll';
import styled from 'styled-components';

const ScrollLink = styled(Links)`
    color: brown;
    display: flex;
    font-weight:bold;
    align-items: center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 3px solid green;
    }
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3
    },
    appBar: {
        backgroundColor: "#FDF3F0",
        color:"brown"
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    imageLogo: {
        width:110,
        [theme.breakpoints.up('md')]: {
            visibility: 'hidden',
        }
    }
}));

const AppBarComponent = () => {
    const classes = useStyles();    
    return (
        <div className={classes.root}>
            <AppBar elevation={0} className={classes.appBar} position="fixed">
                <Toolbar>
                    <img src={logo} className={classes.imageLogo} alt={"logo"}></img>
                    <Grid
                        className={classes.sectionDesktop}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                            
                            <ScrollLink to="which" smooth={true} duration={1000}>¿Quienes somos?</ScrollLink>
                            
                            <ScrollLink to="center" smooth={true} duration={1000}>Centro</ScrollLink>
                            
                            <ScrollLink to="services" smooth={true} duration={1000}>Servicios</ScrollLink>
                            
                            <ScrollLink to="contact" smooth={true} duration={1000}>Contacto</ScrollLink>
                            
                    </Grid>
                    {/** MENU DE MOBILE*/}
                    <Grid
                        className={classes.sectionMobile}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                            <IconButton
                                aria-label="show more"
                                //aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                //onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                    </Grid>                    
                </Toolbar>                
            </AppBar> 
        </div>
    );
}

export default AppBarComponent;