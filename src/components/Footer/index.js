import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                            <FooterLink to="/">Popular Videos</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">YouTube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Tiktok</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorship</FooterLink>
                            <FooterLink to="/">FAQs</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtub"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
