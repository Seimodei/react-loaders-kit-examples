import React from 'react';
import BarsLoader from '../loaders/BarsLoader';
import { Code } from '../styles/styles';


export const BarsDetails = (): JSX.Element => {
  return (
    <span>
      {Code('BarsLoader')}
    </span>
  )
};

const Bars = () => {
  return(
    <div>
        <BarsLoader loading />
    </div>
  )
};


export default Bars;