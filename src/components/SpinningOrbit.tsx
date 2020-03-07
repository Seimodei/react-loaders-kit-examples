import React from 'react';
import SpinningOrbitLoader from '../loaders/SpinningOrbitLoader';
import { Code } from '../styles/styles';


export const SpinningOrbitDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SpinningOrbitLoader')}
    </span>
  )
};

const SpinningOrbit = () => {
  return(
    <div>
        <SpinningOrbitLoader loading size={70} />
    </div>
  )
};


export default SpinningOrbit;