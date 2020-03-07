import React from 'react';
import FlipLoader from '../loaders/FlipLoader';
import { Code } from '../styles/styles';


export const FlipDetails = (): JSX.Element => {
  return (
    <span>
      {Code('FlipLoader')}
    </span>
  )
};

const Flip = () => {
  return(
    <div>
        <FlipLoader loading />
    </div>
  )
};


export default Flip;