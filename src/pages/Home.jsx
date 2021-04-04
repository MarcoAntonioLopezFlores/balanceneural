import React, { Suspense ,lazy } from 'react'
import logo from '../assets/img/bgpink.svg'
import AppBarComponent from '../components/AppBarComponent'
import Main from '../components/Main'
import WhichAreComponent from '../components/WhichAreComponent'
import HealthCenter from '../components/HealthCenter'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
const UbicationComponent = lazy(()=>import('../components/UbicationComponent'))
const ServicesComponent = lazy(()=>import('../components/ServicesComponent'))
const ContactComponent = lazy(()=>import('../components/ContactComponent'))
const ProductComponent = lazy(()=>import('../components/ProductComponent'))
const ContactUs = lazy(()=>import('../components/ContactUs'))
const FooterComponent = lazy(()=>import('../components/FooterComponent'))

const Home = () => {
    return (
        <HelmetProvider>
            <div style={{
                backgroundRepeat: "repeat",
                backgroundImage: `url(${logo})`
            }}>
                <Helmet>
                    <title>Balanceneural</title>
                    <link rel="canonical" href="https://www.tiendatech.xyz" />
                    <meta name="description" content="¿Quieres aliviar tus enfermedades? Visita el Centro de Medicina Integral ✅"/>
                    <meta property="og:title" content="Balanceneural" />
                    <meta property="og:description" content="Balanceneural Centro de Medicina Integral" />
                    <meta
                        property="og:image"                        
                        content="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.6435-9/155789125_3626701080719056_8309499224310503353_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FuPHmsDXOAgAX8_m2vO&_nc_ht=scontent.fcvj1-1.fna&oh=78749015b40721e146443579c94abc5c&oe=608E13F5"
                    />
                    <meta property="og:url" content="balanceneural.com" />
                    <meta property="og:site_name" content="Balanceneural" />
                    <meta property="og:locale" content="es_ES" />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content="Balanceneural" />
                </Helmet>
                <AppBarComponent />
                <Main />
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    style={{ backgroundColor: "#C9D468" }}>
                    <WhichAreComponent />
                </motion.div>
                <HealthCenter />
                
                <Suspense fallback={<div>...</div>}>
                <ServicesComponent />
                <ProductComponent />
                <UbicationComponent />
                <div style={{ backgroundColor: "#C9D468" }}>
                    <ContactComponent />
                </div>
                <ContactUs />
                <FooterComponent />
                </Suspense>
            </div>
        </HelmetProvider>
    )
}

export default Home
