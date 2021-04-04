import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EcoIcon from '@material-ui/icons/Eco';
import HelpIcon from '@material-ui/icons/Help';
import FavoriteIcon from '@material-ui/icons/Favorite';

import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "../assets/img/logo.png"
import { Button, Divider } from '@material-ui/core';

import {Link as Links} from 'react-scroll';

const useStyles = makeStyles({
  list: {
    width: 250,
    height:"100vh",
    backgroundColor:"#FDF3F0",
    
  },
  headerList:{
    margin:25,display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"
  },
  button:{
    color:"#6B4C35",
    
    '&:hover':{
        backgroundColor:"#C9D468",
        color:"#6B4C35",
        
    }   
  },
  icon:{
    color:"#6B4C35"
  }
});

const DrawerMobile = ({ openMobile,setOpenMobile }) => {
  const classes = useStyles();

  const toggleDrawer = (openMobile) => {
    setOpenMobile(openMobile)
  };

  const list = () => (
    <div>
      <div
        className={classes.list}
      >
        <List>
          <div className={classes.headerList}>
          <img src={logo} width="150" alt="logo" />
          <Button 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://wa.me/527772501120" 
            style={{fontWeight:"bold",color:"white",backgroundColor:"#6B4C35"}} variant="contained">
          
              Solicitar una cita
            </Button>
          </div>
          <Divider />
            
          <ListItem button className={classes.button} onClick={() => toggleDrawer(false)} component={Links} to="which" smooth={true} duration={1000}>
            <ListItemIcon>
              <HelpIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText  primary="¿Quienes somos?" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.button} onClick={() => toggleDrawer(false)} component={Links} to="center" smooth={true} duration={1000}>
            <ListItemIcon>
                <HomeIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="Centro" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.button} onClick={() => toggleDrawer(false)} component={Links} to="services" smooth={true} duration={1000}>
            <ListItemIcon>
            <FavoriteIcon className={classes.icon}/>
            
            </ListItemIcon>
            <ListItemText primary="Servicios" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.button} onClick={() => toggleDrawer(false)} component={Links} to="contact" smooth={true} duration={1000}>
            <ListItemIcon>
              <ContactPhoneIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="Contactanos" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.button} onClick={() => toggleDrawer(false)} component={Links} to="products" smooth={true} duration={1000}>
            <ListItemIcon>
            <EcoIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={'left'} open={openMobile} onClose={() => toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
export default DrawerMobile
