import React from 'react';
import LineLoader from '../loaders/LineLoader';
import { Code } from '../styles/styles';


export const LineDetails = (): JSX.Element => {
  return (
    <span>
      {Code('LineLoader')}
    </span>
  )
};

const Line = () => {
  return(
    <div>
        <LineLoader loading />
    </div>
  )
};


export default Line;