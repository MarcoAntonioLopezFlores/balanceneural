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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import DrawerMobile from './DrawerMobile';
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });  
    
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const ScrollLink = styled(Links)`
    color: brown;
    display: flex;
    font-weight:bold;
    align-items: center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &:hover{
        color: #C9D468;
        border: 3px solid #C9D468;
        text-decoration:none;
    }
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3
    },
    
    appBar: {
        backgroundColor: "#FDF3F0",
        color:"brown",
        
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
    }
}));

const AppBarComponent = (props) => {
    const classes = useStyles();   
    const [openMobile, setOpenMobile] = React.useState(false); 
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
            <AppBar elevation={0} className={classes.appBar} position="fixed">
                <Toolbar>
                    <Links to="main" smooth={true} duration={1000}><img src={logo} className={classes.imageLogo} height={90} alt={"logo-balanceneural"}></img></Links>                     
                    <Grid
                        className={classes.sectionDesktop}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">                            
                            <ScrollLink to="which" smooth={true} duration={1000}>¿Quienes somos?</ScrollLink>
                            <ScrollLink to="center" smooth={true} duration={1000}>Centro</ScrollLink>
                            <ScrollLink to="services" smooth={true} duration={1000}>Servicios</ScrollLink>
                            <ScrollLink to="contact" smooth={true} duration={1000}>Contactanos</ScrollLink>
                            <ScrollLink to="products" smooth={true} duration={1000}>Productos</ScrollLink>                            
                    </Grid>                    
                    <Grid
                        className={classes.sectionMobile}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                            <IconButton
                                aria-label="show more"
                                aria-haspopup="true"
                                onClick={() => setOpenMobile(!openMobile)}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                    </Grid>                    
                </Toolbar>                
            </AppBar>
            </HideOnScroll>
            <DrawerMobile openMobile={openMobile} setOpenMobile={setOpenMobile}/>
        </div>
    );
}
export default AppBarComponent;