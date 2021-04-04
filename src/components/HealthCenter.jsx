import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import { slidesCenter } from '../util/Slides';

const useStyles = makeStyles(() => ({
    root: {
        flexDirection: "row-reverse", 
        width: "98vw",
        padding:25
    },
    containerText: {
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "0 10px",
    },
    text: {
        color: "#6B4C35",
        fontSize: "45px",
        fontWeight: 700,
        lineHeight: 1.5,
    },
    information: {
        textAlign: "justify",wordBreak:"break-all", marginTop: 25,fontWeight:"bold"
    }
}))

const HealthCenter = () => {
    const classes = useStyles()
    return (
        <Row id="center" className={classes.root}>
            <Col md>
                <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #C9D468" }}>NUESTRO CENTRO</span>
                    </div>
                    <p className={classes.information}>La medicina y sus ramas hermanas, son las más nobles de las artes. Cada paciente tiene una historia de vida, una identidad única y especial que la diferencia de todas las demás personas y así también su interpretación de los sucesos que conllevan las relaciones de salud-enfermedad.
                    <br/><br/>Dentro de nuestro Centro cada detalle tiene una intención de salud y bienestar, desde  nuestra estructura arquitectónica hasta nuestros espacios interiores han sido diseñados con elementos de luz, viento, agua, aromas y sonidos creados para que desde el primer instante empiecen a restaurarse los circuitos de auto-regulación y equilibrio.
                    </p>

                </section>
            </Col>
            <Col style={{display:"flex",flexDirection:"column", justifyContent:"center"}} md>
                <div>
                    <UncontrolledCarousel
                        items={slidesCenter} />
                </div>
            </Col>
        </Row>
    )
}




export default HealthCenter;