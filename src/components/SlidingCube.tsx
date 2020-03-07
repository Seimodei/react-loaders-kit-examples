import React from 'react';
import SlidingCubeLoader from '../loaders/SlidingCubeLoader';
import { Code } from '../styles/styles';


export const SlidingCubeDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SlidingCubeLoader')}
    </span>
  )
};

const SlidingCube = () => {
  return(
    <div>
        <SlidingCubeLoader loading />
    </div>
  )
};


export default SlidingCube;