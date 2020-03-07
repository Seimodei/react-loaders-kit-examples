import React from 'react';
import SwingingCubeLoader from '../loaders/SwingingCubeLoader';
import { Code } from '../styles/styles';


export const SwingingCubeDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SwingingCubeLoader')}
    </span>
  )
};

const SwingingCube = () => {
  return(
    <SwingingCubeLoader loading />
  )
};


export default SwingingCube;