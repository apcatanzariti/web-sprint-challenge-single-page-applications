import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Pizza ({ values, change, disabled, submit, errors }) {

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <StyledPizzaContainer>
        <Link to='/'>
            <div className='link'>Go Back Home</div>
        </Link>
        <form onSubmit={onSubmit}>
            <StyledInput>
                <p>Enter Name:</p>
                <input
                type='text'
                name='name'
                value={values.name}
                placeholder='Name'
                onChange={onChange}>
                </input>
                <StyledErrorDiv>{errors.name}</StyledErrorDiv>
            </StyledInput>

            <StyledInput>
                <p>Pizza Size:</p>
                <select
                name='size'
                value={values.size}
                onChange={onChange}>
                    <option>Choose a Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <StyledErrorDiv>{errors.size}</StyledErrorDiv>
            </StyledInput>

            <StyledInput>
                <p>Choose Some Toppings:</p>
                <label>
                <input
                type='checkbox'
                name='pepperoni'
                value={values.pepperoni}
                onChange={onChange}>
                </input>
                Pepperoni
                </label>
            </StyledInput>

            <StyledInput>
                <label>
                <input
                type='checkbox'
                name='olives'
                value={values.olives}
                onChange={onChange}>
                </input>
                Olives
                </label>
            </StyledInput>

            <StyledInput>
                <label>
                <input
                type='checkbox'
                name='bacon'
                value={values.bacon}
                onChange={onChange}>
                </input>
                Bacon
                </label>
            </StyledInput>

            <StyledInput>
                <label>
                <input
                type='checkbox'
                name='extra'
                value={values.extra}
                onChange={onChange}>
                </input>
                Extra Cheeze
                </label>
            </StyledInput>

            <StyledInput>
                <p>Any Special Instructions?:</p>
                <input
                type='text'
                name='instructions'
                value={values.instructions}
                placeholder='Special Instructions'
                onChange={onChange}>
                </input>
            </StyledInput>

            <StyledPizzaButton disabled={disabled}>Send My Pizza!</StyledPizzaButton>
        </form>
        </StyledPizzaContainer>
    );
};

//--------------------------------BEGIN STYLING----------------------------------

const StyledPizzaContainer = styled.div`
    // border: solid 1px green;

    .link {
        color: blue;
        text-decoration: none;
    }
`;

const StyledInput = styled.div`
    // border: solid 1px black;
    margin-top: 2%;

    p {
        background-color: #e4e4e4;
        font-weight: bold;
        padding: .5%;
    }

    input {
        padding: .5%;
    }

    select {
        padding: .5%;
    }
`;

const StyledErrorDiv = styled.div`
    padding: .5%;
    color: red;
`;

const StyledPizzaButton = styled.button`
    margin-top: 3%;
        padding: 1% 4% 1% 4%;

        ${props => (props.disabled === true ? `cursor: default;` : `cursor: pointer;`)}
`;