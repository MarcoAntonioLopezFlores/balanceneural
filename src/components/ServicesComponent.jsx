import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components/macro';
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
                <Grid item sm={4} xs={6}>
                <CardService 
                        alt="Wellness Plan"
                        image="#"
                        title="Wellness Plan"
                        content="Ofrecemos planes de Bienestar Corporativo para empresas, chek-up integral, estudios de laboratorio, tratamiento médico personalizado y Day Spa. Ideal para equipos de alto rendimiento."
                        duracion="2 horas"
                        costo="El precio varía"
                    />
                </Grid>
                <Grid item sm={4} xs={6}>
                <CardService 
                        alt="Acupuntura Médica"
                        image="#"
                        title="Acupuntura Médica"
                        content="Sesión clínico-terapéutica  que equilibra los microsistemas del cuerpo a través de la inserción de agujas ultrafinas, con base en las técnicas ancestrales orientales."
                        duracion="1 hora"
                        costo="$500"
                    />
                </Grid>
                <Grid item sm={4} xs={6}>
                <CardService 
                        alt="Fitoterapia"
                        image="#"
                        title="Fitoterapia"
                        content="Extractos de plantas medicinales y sus derivados con finalidad terapéutica para prevenir, aliviar o curar enfermedades."
                        duracion="Duración variable"
                        costo="El precio varía"
                    /> 
                </Grid> 
                <Grid item sm={4} xs={6}>
                <CardService 
                        alt="Medicina Integral"
                        image="#"
                        title="Medicina Integral"
                        content="Cada consulta médica incluye un tratamiento personalizado a base de extractos herbales con efecto terapéutico para que recuperes tu salud de manera limpia y natural."
                        duracion="30 minutos"
                        costo="El precio varía"
                    />
                </Grid>
                <Grid item sm={4} xs={6}>
                <CardService 
                        alt="Fisioterapia y Rehabilitación"
                        image="#"
                        title="Fisioterapia y Rehabilitación"
                        content="Terapia mediante movimientos de presión, estiramientos y acupresión con aceites herbales y termoterapia  que alivia el dolor, mejora la circulación y oxigenación."
                        duracion="1 hora"
                        costo="El precio varía"
                    />
                </Grid>  
            </Grid>
            
        </ServicesContent>
    )
}

export default ServicesComponent