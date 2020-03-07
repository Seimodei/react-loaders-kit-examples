import React from 'react';
import BrokenCirclesLoader from '../loaders/BrokenCirclesLoader';
import { Code } from '../styles/styles';


export const BrokenCirclesDetails = (): JSX.Element => {
  return (
    <span>
      {Code('BrokenCirclesLoader')}
    </span>
  )
};

const BrokenCircles = () => {
  return(
    <div>
        <BrokenCirclesLoader loading size={60} />
    </div>
  )
};


export default BrokenCircles;