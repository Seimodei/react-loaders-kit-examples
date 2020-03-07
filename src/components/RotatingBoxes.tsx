import React from 'react';
import RotatingBoxesLoader from '../loaders/RotatingBoxesLoader';
import { Code } from '../styles/styles';


export const RotatingBoxesDetails = (): JSX.Element => {
  return (
    <span>
      {Code('RotatingBoxesLoader')}
    </span>
  )
};

const RotatingBoxes = () => {
  return(
    <div>
        <RotatingBoxesLoader loading />
    </div>
  )
};


export default RotatingBoxes;