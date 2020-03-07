import React from 'react';
import CirclePopLoader from '../loaders/CirclePopLoader';
import { Code } from '../styles/styles';


export const CirclePopDetails = (): JSX.Element => {
  return (
    <span>
      {Code('CirclePopLoader')}
    </span>
  )
};

const CirclePop = () => {
  return(
    <div>
        <CirclePopLoader loading />
    </div>
  )
};


export default CirclePop;