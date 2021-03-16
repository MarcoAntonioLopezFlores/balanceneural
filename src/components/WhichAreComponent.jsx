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

const WhichAreComponent = () => {
    const classes = useStyles()
    return (
        <Row id="which" className={classes.root}>
            <Col md>
                <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #6B4C35" }}>¿QUIENES SOMOS?</span>
                    </div>
                    <p className={classes.information}>Somos un nuevo concepto de medicina, a través de un equipo transdisciplinario de profesionales de salud con alto compromiso social, ética, respeto por la naturaleza y visión  integral. Balanceneural ha desarrollado su propio modelo de atención que permite una atención médico-terapéutica integral y holística.  Nuestras disciplinas y terapias son seguras, efectivas, con respaldo científico y académico sólido.
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




export default WhichAreComponent;
