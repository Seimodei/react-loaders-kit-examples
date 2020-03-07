import React from 'react';
import PipLoader from '../loaders/PipLoader';
import { Code } from '../styles/styles';


export const PipDetails = (): JSX.Element => {
  return (
    <span>
      {Code('PipLoader')}
    </span>
  )
};

const Pip = () => {
  return(
    <div>
        <PipLoader loading />
    </div>
  )
};


export default Pip;