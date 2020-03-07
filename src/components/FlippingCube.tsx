import React from 'react';
import FlippingCubeLoader from '../loaders/FlippingCubeLoader';
import { Code } from '../styles/styles';


export const FlippingCubeDetails = (): JSX.Element => {
  return (
    <span>
      {Code('FlippingCubeLoader')}
    </span>
  )
};

const FlippingCube = () => {
  return(
    <div>
        <FlippingCubeLoader loading />
    </div>
  )
};


export default FlippingCube;