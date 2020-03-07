import React from 'react';
import MovingSquareLoader from '../loaders/MovingSquareLoader';
import { Code } from '../styles/styles';


export const MovingSquareDetails = (): JSX.Element => {
  return (
    <span>
      {Code('MovingSquareLoader')}
    </span>
  )
};

const MovingSquare = () => {
  return(
    <div>
        <MovingSquareLoader loading />
    </div>
  )
};


export default MovingSquare;