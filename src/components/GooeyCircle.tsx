import React from 'react';
import GooeyCircleLoader from '../loaders/GooeyCircleLoader';
import { Code } from '../styles/styles';


export const GooeyCircleDetails = (): JSX.Element => {
  return (
    <span>
      {Code('GooeyCircleLoader')}
    </span>
  )
};

const GooeyCircle = () => {
  return(
    <div>
        <GooeyCircleLoader loading />
    </div>
  )
};


export default GooeyCircle;