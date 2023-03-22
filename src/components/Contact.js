import React from 'react';
import styled from "styled-components";
const Contact = () => {
    return (
        <ContactS>
            <div id='contact'>
               <main className="contact_m">
                   <h2>
                        <p>LET's
                            <span> W</span>
                            <span>O</span>
                            <span>R</span>
                            <span>K</span>
                            <span>&nbsp;</span>
                            <span>T</span>
                            <span>O</span>
                            <span>G</span>
                            <span>E</span>
                            <span>T</span>
                            <span>H</span>
                            <span>E</span>
                            <span>R</span>
                        </p>
                   </h2>
                   <section className="info">
                    <p>NAME : 강승현</p>
                    <p>E-MAIL : angryBird@ccc.com</p>
                    <p>Address : 경기도 오산시</p>
                    <p>TEL : 010 4125 2311</p>
                   </section>
               </main>
            </div>
        </ContactS>
    );
};
const ContactS = styled.div`
#contact{
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    font-family: Antonio, sans-serif;
    background: #fff;
    color: #111;
    .contact_m{
        padding: 150px 200px;
        line-height: 100px;
        h2{
            font-size: 80px;
            p{
                display: inline-block;
                border-bottom: 3px double #111;
                text-shadow: 0 2px 4px rgba(255,255,255,.25);
                span{
                    position: relative;
                    animation: anima_textup 1.5s infinite;
                    &:nth-child(1){animation-delay: .1s;}
                    &:nth-child(2){animation-delay: .2s;}
                    &:nth-child(3){animation-delay: .3s;}
                    &:nth-child(4){animation-delay: .4s;}
                    &:nth-child(5){animation-delay: .5s;}
                    &:nth-child(6){animation-delay: .6s;}
                    &:nth-child(7){animation-delay: .7s;}
                    &:nth-child(8){animation-delay: .8s;}
                    &:nth-child(9){animation-delay: .9s;}
                    &:nth-child(10){animation-delay: 1s;}
                    &:nth-child(11){animation-delay: 1.1s;}
                    &:nth-child(12){animation-delay: 1.2s;}
                    &:nth-child(13){animation-delay: 1.3s;}
                }
            }
        }
        .info{
            font-size: 24px;
        }
    }
}
@keyframes anima_textup {
    0%{top:0}
    20%{top:-1rem}
    40%{top:0}
    60%{top:0}
    80%{top:0}
    100%{top:0}
}
`;

export default Contact;