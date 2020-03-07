import React from 'react';
import SphereLoader from '../loaders/SphereLoader';
import { Code } from '../styles/styles';


export const SphereDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SphereLoader')}
    </span>
  )
};

const Sphere = () => {
  return(
    <div>
        <SphereLoader loading />
    </div>
  )
};


export default Sphere;