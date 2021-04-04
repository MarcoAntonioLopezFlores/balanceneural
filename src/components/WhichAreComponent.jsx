import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import { firstSlides } from '../util/Slides';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "98vw",
        padding:25,
        
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

const WhichAreComponent = () => {
    const classes = useStyles()
    return (
        <Row id="which" className={classes.root}>
            <Col md>
                <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #6B4C35" }}>¿QUIENES SOMOS?</span>
                    </div>
                    <p className={classes.information}>Somos un nuevo concepto de medicina con un Centro de Medicina Integral en la mejor zona de Cuernavaca, ofrecemos nuestros a través de un equipo transdisciplinario de profesionales de salud con alto compromiso social, ética, respeto por la naturaleza y visión  integral. Balanceneural ha desarrollado su propio modelo de atención que permite una atención médico-terapéutica integral y holística.  Nuestras disciplinas y terapias son seguras, efectivas, con respaldo científico y académico sólido. 
                    <br/><br/>Nuestra visión es ofrecer un nuevo concepto en medicina, con lo mejor de la ciencia y la naturaleza en equilibrio, con un respaldo académico y científico sólido, dentro de un ambiente diseñado específicamente para una experiencia completa de bienestar.
                    </p>

                </section>
            </Col>
            <Col style={{display:"flex",flexDirection:"column", justifyContent:"center"}} md>
                <div>
                    <UncontrolledCarousel
                        items={firstSlides} />
                </div>
            </Col>
        </Row>
    )
}




export default WhichAreComponent;
