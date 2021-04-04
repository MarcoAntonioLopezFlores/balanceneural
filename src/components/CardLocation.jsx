import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DirectionsOutlinedIcon from '@material-ui/icons/DirectionsOutlined';
import StarIcon from '@material-ui/icons/Star';
//import { Col, Row } from 'reactstrap';

const useStyles= makeStyles({
    star:{
        color:"yellow"
    }
})

const dayValidate =()=>{
    const day = new Date().getDay()
    const hour = new Date().getHours()
    return (day!==7&&!(hour>9&&hour<19))
}

const CardLocation = () => {
    const classes = useStyles()
    return (
        
            <Grid container direction="row">
                <Grid container direction="column" item xs={10}>
                    <Typography variant="subtitle2">Balanceneural Centro de Medicina Integral</Typography>
                    <div>
                        <Typography variant="caption">5,0</Typography>
                        <StarIcon className={classes.star} fontSize="small"/>
                        <StarIcon className={classes.star} fontSize="small"/>
                        <StarIcon className={classes.star} fontSize="small"/>
                        <StarIcon className={classes.star} fontSize="small"/>
                        <StarIcon className={classes.star} fontSize="small"/>
                    </div>
                    <Typography variant="caption">Centro Médico</Typography>
                    <Typography variant="caption" color={dayValidate?"error":"primary"}>{dayValidate?"Cerrado":"Abierto"}</Typography>    
                </Grid>
                
                
                <Grid item xs={1}>
                    <IconButton
                                aria-label="show more"
                                aria-haspopup="true"
                                onClick={() => window.open("https://www.google.com/maps/dir//Balanceneural+Centro+de+Medicina+Integral,+Av+Teopanzolco+408-104,+Reforma,+62260+Cuernavaca,+Mor./@18.9382446,-99.2218067,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cddfc61f2d4c09:0x727bb6ac51033e1a!2m2!1d-99.2227936!2d18.9387825")}
                                color="inherit"
                    >
                        <DirectionsOutlinedIcon color="primary" fontSize="large"/>
                    </IconButton>
                </Grid>
            </Grid>
        
    )
}

export default CardLocation
