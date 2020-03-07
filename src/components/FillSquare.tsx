import React from 'react';
import FillSquareLoader from '../loaders/FillSquareLoader';
import { Code } from '../styles/styles';


export const FillSquareDetails = (): JSX.Element => {
  return (
    <span>
      {Code('FillSquareLoader')}
    </span>
  )
};

const FillSquare = () => {
  return(
    <div>
        <FillSquareLoader loading />
    </div>
  )
};


export default FillSquare;