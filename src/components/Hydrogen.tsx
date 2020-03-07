import React from 'react';
import HydrogenLoader from '../loaders/HydrogenLoader';
import { Code } from '../styles/styles';


export const HydrogenDetails = (): JSX.Element => {
  return (
    <span>
      {Code('HydrogenLoader')}
    </span>
  )
};

const Hydrogen = () => {
  return(
    <div>
        <HydrogenLoader loading />
    </div>
  )
};


export default Hydrogen;