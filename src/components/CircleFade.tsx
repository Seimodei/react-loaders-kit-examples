import React from 'react';
import CircleFadeLoader from '../loaders/CircleFadeLoader';
import { Code } from '../styles/styles';


export const CircleFadeDetails = (): JSX.Element => {
  return (
    <span>
      {Code('CircleFadeLoader')}
    </span>
  )
};

const CircleFade = () => {
  return(
    <div>
        <CircleFadeLoader loading />
    </div>
  )
};


export default CircleFade;