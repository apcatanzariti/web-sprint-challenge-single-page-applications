import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Homepage () {
    return (
        <Link to='/pizza'>
            <br />
            <StyledButton>Get Me Some Pizza!</StyledButton>
        </Link>
    );
};

//-------------------------------BEGIN STYLING-----------------------------------

const StyledButton = styled.button`
    padding: 4% 8% 4% 8%;
    margin-top: 2%;
    background-color: white;
    border: solid 2px red;
    cursor: pointer;
    transition: .3s;
    color: red;
    font-size: 1.5em;
    width: 100%;

    :hover {
        background-color: red;
        color: white;
    }
`;