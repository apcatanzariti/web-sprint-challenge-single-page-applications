import React from "react";
import styled from 'styled-components';

export default function PizzaOrder ({ pizzas, reset }) {

    return (
        <StyledOrderContainer>
            {
                pizzas.map((pizza) => {
                    return (
                        <StyledOrderDetails>
                            <h2>Order Details:</h2>

                            <StyledDetailDiv><b>Name:</b> {pizza.name}</StyledDetailDiv>

                            <StyledDetailDiv><b>Size:</b> {pizza.size}</StyledDetailDiv>

                            {pizza.pepperoni ? <StyledDetailDiv><b>Topping:</b> Pepperoni</StyledDetailDiv> : null}

                            {pizza.olives ? <StyledDetailDiv><b>Topping:</b> Olives</StyledDetailDiv> : null}

                            {pizza.bacon ? <StyledDetailDiv><b>Topping:</b> Bacon</StyledDetailDiv> : null}

                            {pizza.extra ? <StyledDetailDiv><b>Topping:</b> Extra Cheeze!</StyledDetailDiv> : null}

                            {pizza.instructions ? <StyledDetailDiv><b>Special Instructions:</b> {pizza.instructions}</StyledDetailDiv> : 'No special instructions :('}

                            <br />
                            <button onClick={reset}>Go Back Home</button>
                        </StyledOrderDetails>
                    );
                })
            }
            <div><img src='https://i.pinimg.com/originals/12/49/f0/1249f00662b90f22cae4c236dbef1996.jpg' /></div>
        </StyledOrderContainer>
    );
};

//---------------------------------BEGIN STYLING---------------------------------

const StyledOrderContainer = styled.div`
    // border: solid 1px blue;
    display: flex;
    justify-content: space-between;
`;

const StyledOrderDetails = styled.div`
    // border: solid 1px yellow;
    padding: 8.3%;

    button {
        margin-top: 2%;
        cursor: pointer;
    }
`;

const StyledDetailDiv = styled.div`
    margin-top: 6%;
`;

