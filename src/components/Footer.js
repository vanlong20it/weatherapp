import React from 'react'
import styled from 'styled-components';
import { VFXSpan } from "react-vfx";

const FooterStyle = styled.footer`
    text-align:center;
    position:relative;
    bottom:0;
    color:white;
    padding:10px;
    p{
        margin:0;
    }
`;
const Footer = () => {
    return (
        <>
            <FooterStyle>
                <p>Nhóm B</p>
                <p><VFXSpan>Demo ReactJS</VFXSpan></p>
            </FooterStyle>
        </>
    );
}

export default Footer;