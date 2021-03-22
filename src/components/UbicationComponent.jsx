import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'reactstrap';
import MapComponent from './MapComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "98vw",
        padding: 25
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
        textAlign: "justify", marginTop: 25, fontWeight: "bold"
    }

}))

const UbicationComponent = () => {
    const classes = useStyles()
    return (
        <Row id="ubication" className={classes.root}>
            <Col md>
                <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #6B4C35" }}>UBICACIÓN</span>
                    </div>
                    <p className={classes.information}>
                        Avenida Teopanzolco 408-104
                        Reforma
                        62260 Cuernavaca, Mor.
                        México
                    </p>
                    <div
                        style={{ margin: 25, display: "flex", justifyContent: "center" }}>
                        <Button
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://www.google.com/maps/dir//Balanceneural+Centro+de+Medicina+Integral,+Av+Teopanzolco+408-104,+Reforma,+62260+Cuernavaca,+Mor./@18.9382446,-99.2218067,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cddfc61f2d4c09:0x727bb6ac51033e1a!2m2!1d-99.2227936!2d18.9387825" 
                            style={{ fontWeight: "bold", color: "white", backgroundColor: "#6B4C35" }} variant="contained">
                            ¿Cómo llegar?
                        </Button>
                    </div>
                </section>
            </Col>
            <Col md>
                <div >
                    <MapComponent />
                </div>
            </Col>
        </Row>
    )
}


export default UbicationComponent
