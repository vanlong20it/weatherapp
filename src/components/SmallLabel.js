import styled from 'styled-components';
import device from './Device';

const SmallLabel = styled.h4`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '14px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '16px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '20px'};
  }
`;

export default SmallLabel;
