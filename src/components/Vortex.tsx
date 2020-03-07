import React from 'react';
import VortexLoader from '../loaders/VortexLoader';
import { Code } from '../styles/styles';


export const VortexDetails = (): JSX.Element => {
  return (
    <span>
      {Code('VortexLoader')}
    </span>
  )
};

const Vortex = () => {
  return(
    <div>
        <VortexLoader loading />
    </div>
  )
};


export default Vortex;