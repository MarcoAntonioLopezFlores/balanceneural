import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import emailjs from "emailjs-com";
import Recaptcha from 'react-recaptcha';
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
    const [verified,setVerified]= React.useState(false)
    
    var callback = () => {
        console.log('Done!!!!');

    };

    
    var verifyCallback = (response) => {
        
        if (response) {
            setVerified(true)
        }
    };

    function sendEmail(e) {
        e.preventDefault();
        if(verified){
            emailjs.sendForm('balancecorreos', 'template_hdofy34', e.target, 'user_OPwkR2N53DEL7A19J0n8p')

            .then((result) => {
                alert("Mensaje enviado con éxito! 👍");

            }, (error) => {
                alert(error.message)

            });
            e.target.reset()
        }else{
            alert("error:(")   
        }
        


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
                            <input id="subject" type="text" autoFocus className="form-control" required placeholder="Asunto" name="subject" />
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
                            <Col sm className="mt-3" style={{width:"100vw"}}>
                            <Recaptcha
                                
                                onloadCallback={callback}
                                sitekey="6LeFboIaAAAAAJTylFq97fWeubYrnRwuYgiRnhVe"
                                render="explicit"
                                verifyCallback={verifyCallback}
                            />
                            </Col>
                            <Col sm>
                            <div 
        style={{ display:"flex",justifyContent:"center"}}>
                            <input style={{ marginTop:12,height:50,fontWeight: "bold", color: "white", backgroundColor: "#6B4C35" }} type="submit" className="btn btn-info" value="Enviar correo"></input>
                            </div>
                            </Col>
                        </Row>
                        
                </form>
            </Col>
            <Col md className="mt-3">
                <div>
                    <UncontrolledCarousel
                        items={items} />
                </div>
            </Col>
        </Row>
    )
}
//key site web 6LeFboIaAAAAAJTylFq97fWeubYrnRwuYgiRnhVe
//secret key 6LeFboIaAAAAAPVsQvl9dTFNF6KYprH_vlHT_Prm
export default ContactUs
