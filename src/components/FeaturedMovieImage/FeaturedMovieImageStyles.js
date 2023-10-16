import styled from 'styled-components';

export const Img = styled.img`
opacity: ${props => props.opacity};
background-color: #000000;
width: ${props => props.innerWidth > 768 ? '150%' : '100%'};
`;