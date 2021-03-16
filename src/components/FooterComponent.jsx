import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.section`
    padding-top:2%;
    height: 8vh;
    max-height: 1100 px;
    position: relative;
    overflow: hidden;
    background-color:#6B4C35;
    color:white;
    
    p{
        font-size:80%;
        font-weight:bold;
        text-align:center;
    }
`;

const FooterComponent = () => {
    return (
        <FooterSection>
           <p>©2021 Balanceneural. Todos los derechos reservados. </p>
        </FooterSection>
    )
}

export default FooterComponent;