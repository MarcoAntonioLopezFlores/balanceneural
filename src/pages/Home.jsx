
import React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import UbicationComponent from '../components/UbicationComponent'
import FooterComponent from '../components/FooterComponent'
import HealthCenter from '../components/HealthCenter'
import Main from '../components/Main'
import ServicesComponent from '../components/ServicesComponent'
import WhichAreComponent from '../components/WhichAreComponent'
import { motion} from 'framer-motion'
import ContactComponent from '../components/ContactComponent'

import logo from '../assets/img/bgpink.svg'
/*
style={{
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundImage:'url(https://image.freepik.com/foto-gratis/vista-superior-helechos-hojas-espacio-copia_23-2148678607.jpg)'
}}
*/
const Home = () => {
    
    return (
        <div style={{
            backgroundRepeat:"repeat",
            backgroundImage:`url(${logo})`
        }}>
            <AppBarComponent/>
            
                <Main></Main>
                
                <motion.div 
                    initial={{
                        opacity:0,
                    }}
                    animate={{
                        opacity:1
                    }}
                    transition={{
                        duration:1
                    }}
                    style={{backgroundColor:"#C9D468"}}>
                    <WhichAreComponent/>
                </motion.div>
                <HealthCenter />
                <ServicesComponent/> 
                <UbicationComponent/>
                <div style={{backgroundColor:"#C9D468"}}>
                <ContactComponent/>
                </div>
                <FooterComponent/>
                
            
            
            
        </div>
    )
}

export default Home
