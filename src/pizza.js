import React from "react";
import { Link } from 'react-router-dom';

export default function Pizza ({ values, change, submit, disabled }) {

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
        <div>
        <Link to='/'>
            <div>go back home</div>
        </Link>
        <form onSubmit={onSubmit}>
            <div>
                <input
                type='text'
                name='name'
                value={values.name}
                placeholder='Name'
                onChange={onChange}>
                </input>
            </div>

            <div>
            <select
            name='size'
            value={values.size}
            onChange={onChange}>
                <option>Choose a Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
            </div>

            <div>
                <label>
                <input
                type='checkbox'
                name='pepperoni'
                value={values.pepperoni}
                onChange={onChange}>
                </input>
                Pepperoni
                </label>
            </div>

            <div>
                <label>
                <input
                type='checkbox'
                name='olives'
                value={values.olives}
                onChange={onChange}>
                </input>
                Olives
                </label>
            </div>

            <div>
                <label>
                <input
                type='checkbox'
                name='bacon'
                value={values.bacon}
                onChange={onChange}>
                </input>
                Bacon
                </label>
            </div>

            <div>
                <label>
                <input
                type='checkbox'
                name='extra'
                value={values.extra}
                onChange={onChange}>
                </input>
                Extra Cheeze
                </label>
            </div>

            <div>
                <input
                type='text'
                name='instructions'
                value={values.instructions}
                placeholder='Special Instructions'
                onChange={onChange}>
                </input>
            </div>

            <button disabled={disabled} >Send My Pizza!</button>
        </form>
        </div>
    );
};