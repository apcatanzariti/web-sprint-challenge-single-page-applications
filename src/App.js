import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Homepage from './homepage';
import Pizza from './pizza';
import PizzaOrder from './pizzaorder';
import * as yup from 'yup';
import schema from './validation/formSchema';
import styled from 'styled-components';
import axios from 'axios';

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
const initialDisabled = true;

const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const history = useHistory();

  const routeToOrder = () => {
    history.push('/pizzaorder');
  };

  const routeToHome = () => {
    setPizza(initialPizza);
    history.push('/');
  };

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })

    setFormValues({...formValues, [name]: value});
  };

  useEffect(() => {
    schema.isValid(formValues)
    .then((valid) => {
      setDisabled(!valid);
    })
  }, [formValues])

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      bacon: formValues.bacon,
      extra: formValues.extra,
      instructions: formValues.instructions.trim()
    };
    setPizza([...pizza, newPizza]);
    setFormValues(initialValues);
    routeToOrder();
    //postNewPizza(newPizza);
  };

  // const postNewPizza = (newPizza) => {
  //   axios
  //   .post('https://reqres.in', newPizza)
  //   .then((res) => {
  //     setPizza([...pizza, res.data]);
  //     setFormValues(initialValues);
  //     routeToOrder();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  return (
    <StyledContainer>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path='/pizzaorder'>
          <PizzaOrder pizzas={pizza} reset={routeToHome}/>
        </Route>
        <Route path='/pizza'>
          <Pizza values={formValues} change={inputChange} disabled={disabled} submit={formSubmit} errors={formErrors}/>
        </Route>
        <Route path='/'>
          <img src='https://i.pinimg.com/736x/76/af/b2/76afb213e0fb7ec5c3833f0a1291834a.jpg'/>
          <Homepage />
        </Route>
      </Switch>
    </StyledContainer>
  );
};

export default App;

//-------------------------------------BEGIN STYLES-------------------------------

const StyledContainer = styled.div`
    // border: solid 1px red;
    margin: 0 auto;
    width: 80%;
    text-align: center;
    font-family: sans-serif;

    h1 {
      color: #0000b8;
    }
`;
