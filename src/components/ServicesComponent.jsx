import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components/macro';
import { services } from '../util/Slides';
import CardService from './CardService';



const ServicesContent = styled.div`
padding:2%;
height:100%;
position:relative;
z-index:10;
display:flex;
align-items:center;
flex-direction:column;
max-width:1600px;
width: calc(100%-100px);
background-color:#C9D468;
color:#6B4C35;


span{
    
    font-size: 45px;
    font-weight: 700;
    line-height: 1.5
    font-weight:bold;
    text-transform:uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    text-align:center;
    margin-bottom:1.5rem;
}
`

const ServicesComponent=()=> {
    
    return (
        <ServicesContent id="services">                                    
            <span style={{ borderBottom: "2px solid #6B4C35" }}>NUESTROS SERVICIOS</span>   
            <Grid
                container
                direction="row"
                justify="space-evenly"
                >
                
                {services.map((service)=>
                <Grid item sm={3} xs={6} key={service.alt}>
                <CardService 
                        alt={service.alt}
                        image={service.image}
                        title={service.title}
                        content={service.content}
                        duracion={service.duracion}
                        costo={service.costo}
                    />
                </Grid>                
                )}
            </Grid>
            
        </ServicesContent>
    )
}

export default ServicesComponent