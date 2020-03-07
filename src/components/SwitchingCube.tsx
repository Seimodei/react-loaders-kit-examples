import React from 'react';
import SwitchingCubeLoader from '../loaders/SwitchingCubeLoader';
import { Code } from '../styles/styles';


export const SwitchingCubeDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SwitchingCubeLoader')}
    </span>
  )
};

const SwitchingCube = () => {
  return(
    <div>
        <SwitchingCubeLoader loading />
    </div>
  )
};


export default SwitchingCube;