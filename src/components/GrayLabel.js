import device from "./Device";
import styled from "styled-components";
const GrayLabel = styled.div`
    padding:20px 0px;
    background-color:rgba(0,0,0,.7);
    color: ${({ color }) => color || "#65a69a"};
    display: block;
    font-weight: ${({ weight }) => weight || "600"};
    font-size: ${({ fontSize }) => fontSize || "30px"};
    text-align: ${({ align }) => align || "left"};
    ${({ firstToUpperCase }) =>
        firstToUpperCase &&
        `
    &:first-letter {
    text-transform: uppercase;
    }
    `}
    @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || "37px"};
    }
    @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || "43px"};
    } 
    @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || "52px"};
    } 
`;

export default GrayLabel;
