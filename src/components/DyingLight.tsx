import React from 'react';
import DyingLightLoader from '../loaders/DyingLightLoader';
import { Code } from '../styles/styles';


export const DyingLightDetails = (): JSX.Element => {
  return (
    <span>
      {Code('DyingLightLoader')}
    </span>
  )
};

const DyingLight = () => {
  return(
    <div>
        <DyingLightLoader loading />
    </div>
  )
};


export default DyingLight;