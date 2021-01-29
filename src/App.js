import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Homepage from './homepage';
import Pizza from './pizza';
import PizzaOrder from './pizzaorder';

const initialPizza = [];
const initialValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  bacon: false,
  extra: false,
  instructions: ''
};
const initialFormErrors = {
  name: '',
  size: ''
};
const initialDisabled = false;

const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const history = useHistory();

  const routeToOrder = () => {
      history.push('/pizzaorder');
  };

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  };

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni === true ? 'Pepperoni' : null,
      olives: formValues.olives === true ? 'Olives' : null,
      bacon: formValues.bacon === true ? 'Bacon' : null,
      extra: formValues.extra === true ? 'Extra Cheeze!' : null,
      instructions: formValues.instructions.trim()
    };
    setPizza([...pizza, newPizza]);
    setFormValues(initialValues);
    routeToOrder();
  };

  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path='/pizzaorder'>
          <PizzaOrder pizzas={pizza}/>
        </Route>
        <Route path='/pizza'>
          <Pizza values={formValues} change={inputChange} disabled={disabled} submit={formSubmit}/>
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
