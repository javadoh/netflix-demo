import styled from 'styled-components';

export const Button = styled.button`
    color: ${props => props.txtColor};
    background-color: ${props => props.bckColor};
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    position: absolute;
    bottom: ${props => props.bottom};
    left: ${props => props.left}
`;