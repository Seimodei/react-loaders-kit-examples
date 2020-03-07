import React from 'react';
import HelixLoader from '../loaders/HelixLoader';
import { Code } from '../styles/styles';


export const HelixDetails = (): JSX.Element => {
  return (
    <span>
      {Code('HelixLoader')}
    </span>
  )
};

const Helix = () => {
  return(
    <div>
        <HelixLoader loading />
    </div>
  )
};


export default Helix;