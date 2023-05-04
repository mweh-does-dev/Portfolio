import React from "react";
import styled from "styled-components";
import github from './assets/github-mark.png';
import mail from './assets/mail.png';
import linkedin from './assets/linkedin.png';


const StyledFooter = styled.footer`
 display: flex;
    grid-area: footer;
    background-color: #ffffff2a;
   border-top: 1px solid black;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

`;

const StyleImg = styled.img`
width: 70px;
height: 70px;
margin: 10px;
`;

const StyleSocialMedia = styled.a`
    display:flex;
    justify-content:left;
    flex-direction: row;
    gap:20px;
    `;

    const SocialmediaInner = styled.div`
    display: flex;
    flex-direction: row;
    `;

const StyleContact = styled.p`
    margin-left: 30px;
`;
const StyleImgContact = styled.img`
width: 16px;
height: 13px;
margin-right: 7px;

`;




let footerData = [
{   
    id:1,
    href: "https://github.com/mweh-does-dev",
    src: github,
    alt: "Github",
    classname: "github"
},
{
    id:3,
    href: "https://github.com/mweh-does-dev",
    src: linkedin,
    alt: "Linkedin",
    classname: "linkedin"

}
]




    const Footer = () => {
        return (
            <StyledFooter>
                <StyleContact>
                <p> <StyleImgContact src={mail} alt="mail"/>
                Josefinberntsson91@gmail.com</p>
                </StyleContact>
            <SocialmediaInner>
            {footerData.map(link =>
                <StyleSocialMedia key={link.id} href={link.href}>
                    <StyleImg src={link.src} alt={link.alt} className={link.classname} />
                </StyleSocialMedia> )}
                </SocialmediaInner>


          {/*   <StyleSocialMedia>
                <StyleImg src={github} alt="Github" className="github"/>
                <StyleImg src={figma} alt="Figma" className="Figma"/>
               <StyleImg src={linkedin} alt="LinkedIn" className="Linkedin"/>  
            </StyleSocialMedia>
 */}
            
            </StyledFooter>

        );
    }

    export default Footer;