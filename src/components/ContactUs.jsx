import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import emailjs from "emailjs-com";
import { secondSlides } from '../util/Slides';


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

const ContactUs = () => {
    const classes = useStyles()
   

    function sendEmail(e) {
        e.preventDefault();
        
            emailjs.sendForm('balancecorreos', 'template_hdofy34', e.target, 'user_OPwkR2N53DEL7A19J0n8p')

            .then((result) => {
                alert("Mensaje enviado con éxito! 👍");

            }, (error) => {
                alert(error.message)

            });
            e.target.reset()
        
        


    }

    
    return (
        <Row id="uscontact" className={classes.root}>
            <Col md={6}>
                <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #6B4C35" }}>Platicanos sobre tu problema</span>
                    </div>
                </section>

                <form onSubmit={sendEmail} style={{padding:15}}>
                    
                        <Row>
                            <label htmlFor="subject">Asunto</label>
                            <input id="subject" type="text" className="form-control" required placeholder="Asunto" name="subject" />
                        </Row>
                        
                        <Row>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-control" required placeholder="Escribe tu correo..." name="email" />
                        </Row>
                        <Row>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" className="form-control" cols="30" rows="8" required placeholder="Escribe tu mensaje..." name="message"></textarea>
                        </Row>
                        
                        <Row style={{ paddingLeft:30,justifyContent: "center" }}>
                            
                            <Col sm>
                            <div 
        style={{ display:"flex",justifyContent:"center"}}>
                            <input style={{ marginTop:12,height:50,fontWeight: "bold", color: "white", backgroundColor: "#6B4C35" }} type="submit" className="btn btn-info" value="Enviar correo"></input>
                            </div>
                            </Col>
                        </Row>
                        
                </form>
            </Col>
            <Col style={{display:"flex",flexDirection:"column", justifyContent:"center"}} md >
                <div>
                    <UncontrolledCarousel 
                        items={secondSlides} />
                </div>
            </Col>
        </Row>
    )
}

export default ContactUs
