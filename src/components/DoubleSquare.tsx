import React from 'react';
import DoubleSquareLoader from '../loaders/DoubleSquareLoader';
import { Code } from '../styles/styles';


export const DoubleSquareDetails = (): JSX.Element => {
  return (
    <span>
      {Code('DoubleSquareLoader')}
    </span>
  )
};

const DoubleSquare = () => {
  return(
    <div>
        <DoubleSquareLoader loading />
    </div>
  )
};


export default DoubleSquare;