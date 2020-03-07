import React from 'react';
import BarsLoader2 from '../loaders/BarsLoader2';
import { Code } from '../styles/styles';


export const BarsDetails2 = (): JSX.Element => {
  return (
    <span>
      {Code('BarsLoader2')}
    </span>
  )
};

const Bars2 = () => {
  return(
    <div>
        <BarsLoader2 loading />
    </div>
  )
};


export default Bars2;