import React from "react";

export default function PizzaOrder ({ pizzas }) {
    return (
        <div>
            {
                pizzas.map((pizza) => {
                    return (
                        <div>
                            <h2>Order Details:</h2>
                            <div>Name: {pizza.name}</div>
                            <div>Size: {pizza.size}</div>
                            {pizza.pepperoni ? <div>Topping: {pizza.pepperoni}</div> : null}
                            {pizza.olives ? <div>Topping: {pizza.olives}</div> : null}
                            {pizza.bacon ? <div>Topping: {pizza.bacon}</div> : null}
                            {pizza.extra ? <div>Topping: {pizza.extra}</div> : null}
                            {pizza.instructions ? <div>Special Instructions: {pizza.instructions}</div> : 'No special instructions :('}
                        </div>
                    );
                })
            }
        </div>
    );
};