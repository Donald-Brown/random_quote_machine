import React from 'react';

// this is a stateless presentational component
const Button = ({ buttonDisplayName, clickHandler }) => (
  // The parent will deal with the clickHandler
  <button onClick={clickHandler} id="new-quote">{ buttonDisplayName }</button>
);

export default Button;