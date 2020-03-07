import React from 'react';
import FillCircleLoader from '../loaders/FillCircleLoader';
import { Code } from '../styles/styles';


export const FillCircleDetails = (): JSX.Element => {
  return (
    <span>
      {Code('FillCircleLoader')}
    </span>
  )
};

const FillCircle = () => {
  return(
    <div>
        <FillCircleLoader loading />
    </div>
  )
};


export default FillCircle;