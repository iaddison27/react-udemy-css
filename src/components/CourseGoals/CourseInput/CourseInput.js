import React, { useState } from 'react';
import styled from "styled-components";

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import ButtonCssModule from "../../UI/Button/ButtonCssModule";

const FormControlProps = styled.div`
  margin: 0.5rem 0;

& label {
  color: ${props => props.invalid ? 'red' : 'black'};
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? 'pink' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border-color: red;
  background: pink;
}

&.invalid label {
  color: red;
}
`;

const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border-color: red;
  background: pink;
}

&.invalid label {
  color: red;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <p>Styled components (div) passing in an "invalid" props:</p>
      <FormControlProps invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControlProps>
      <p>Styled components (div), applying CSS class conditionally to the styled component:</p>
      <FormControl className={`form-control  ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <p>Conditional CSS classes, not using styled components:</p>
      <div className={`form-control  ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      <ButtonCssModule type="submit">Add Goal</ButtonCssModule>
    </form>
  );
};

export default CourseInput;
