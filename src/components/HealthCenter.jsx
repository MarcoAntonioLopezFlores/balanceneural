import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import banner_6 from '../assets/img/banner_6.jpg'
import banner_7 from '../assets/img/banner_7.jpg'
import banner_8 from '../assets/img/banner_8.jpg'

const items = [
    {
        src: banner_6,
        altText: 'Slide 1',
        caption: '',
        header: '',
        key: '1'
    },
    {
        src: banner_7,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '2'
    },
    {
        src: banner_8,
        altText: 'Slide 3',
        caption: '',
        header: '',
        key: '3'
    }
];

const useStyles = makeStyles((theme) => ({
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
        textAlign: "justify", marginTop: 25,fontWeight:"bold"
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
                    Dentro de nuestro Centro cada detalle tiene una intención de salud y bienestar, desde  nuestra estructura arquitectónica hasta nuestros espacios interiores han sido diseñados con elementos de luz, viento, agua, aromas y sonidos creados para que desde el primer instante empiecen a restaurarse los circuitos de auto-regulación y equilibrio.
                    </p>

                </section>
            </Col>
            <Col md>
                <div>
                    <UncontrolledCarousel
                        items={items} />
                </div>
            </Col>
        </Row>
    )
}




export default HealthCenter;