import React from 'react';
import RotatingCircleLoader from '../loaders/RotatingCircleLoader';
import { Code } from '../styles/styles';


export const RotatingCircleDetails = (): JSX.Element => {
  return (
    <span>
      {Code('RotatingCircleLoader')}
    </span>
  )
};

const RotatingCircle = () => {
  return(
    <div>
        <RotatingCircleLoader loading />
    </div>
  )
};


export default RotatingCircle;