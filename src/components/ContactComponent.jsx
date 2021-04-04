import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Col, Row} from 'reactstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const useStyles = makeStyles((theme) => ({
    root: {
        width:"98vw",
        
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
        listStyle:"none",
        textAlign: "justify", marginTop: 25,fontWeight:"bold",

        '& li':{
            marginBottom:10
        }

    }
}))

const ContactComponent = () => {
    const classes = useStyles()
    return (
        <Row id="contact" className={classes.root}>
            <Col style={{display:"flex",justifyContent:"center"}}>
                <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #6B4C35" }}>CONTACTO</span>
                    </div>
                    
                    <ul className={classes.information}>
                        <li >
                            <Button
                                target="_blank" 
                                rel="noopener noreferrer"
                                href="tel:7772501120" 
                                style={{ width:"90%",fontWeight: "bold", color: "white", backgroundColor: "#6B4C35" }} variant="contained">
                                <PhoneIcon fontSize="large" style={{marginRight:5}}/>777 102 1821
                            </Button>
                            
                        </li>
                        <li> 
                            <Button
                                target="_blank" 
                                rel="noopener noreferrer"
                                href="https://api.whatsapp.com/send?phone=527771112488&text=Hola%20deseo%20adquirir%20un%20servicio%20con%20ustedes" 
                                style={{ width:"90%",fontWeight: "bold", color: "white", backgroundColor: "#6B4C35" }} variant="contained">
                                <WhatsAppIcon fontSize="large" style={{marginRight:5}}/> 777 216 8449
                            </Button>
                        </li>
                        <li> 
                            <Button
                                target="_blank" 
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Balanceneural" 
                                style={{ width:"90%",fontSize:12,fontWeight: "bold", color: "white", backgroundColor: "#6B4C35" }} variant="contained">
                                <FacebookIcon fontSize="large" style={{marginRight:5}}/>Balanceneural
                            </Button>
                        </li>
                    </ul>
                
                </section>
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            <section className={classes.containerText}>
                    <div className={classes.text}>
                        <span style={{ borderBottom: "2px solid #6B4C35" }}>HORARIO</span>
                    </div>
                    
                    <ul className={classes.information}>
                        <li>Lun.	10:00–19:00</li>
                        <li>Mar.	10:00–19:00</li>
                        <li>Mié.	10:00–19:00</li>
                        <li>Jue.	10:00–19:00</li>
                        <li>Vie.	10:00–19:00</li>
                        <li>Sáb.	10:00–14:00</li>
                        <li>Dom.	Cerrado</li>
                    </ul>
                    
                </section>
            </Col>
            
        </Row>
    )
}




export default ContactComponent;
