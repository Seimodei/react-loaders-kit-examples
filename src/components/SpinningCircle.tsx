import React from 'react';
import SpinningCircleLoader from '../loaders/SpinningCircleLoader';
import { Code } from '../styles/styles';


export const SpinningCircleDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SpinningCircleLoader')}
    </span>
  )
};

const SpinningCircle = () => {
  return(
    <div>
        <SpinningCircleLoader loading />
    </div>
  )
};


export default SpinningCircle;