import React from 'react'
import logo from '../assets/img/logo.png'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    imageLogo: {
        
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));
const Main = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <section id="main">
        <div className="main-text">
            <span style={{borderBottom: "2px solid #C9D468"}}>BALANCENEURAL</span> <br /> Health & <br />
                Wellness Center
        </div>
        <div 
            
            className={classes.imageLogo}>
        <img src={logo} width="300" alt="logo" />
        </div>
        
        
      </section>
      <div 
        style={{ margin:25,display:"flex",justifyContent:"center"}}>
          <Button 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://wa.me/527772501120" 
            style={{fontWeight:"bold",color:"white",backgroundColor:"#6B4C35"}} variant="contained">
          
              Solicitar una cita
            </Button>
        </div>
      </React.Fragment>
    )
}

export default Main
