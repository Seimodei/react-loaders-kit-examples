import React from 'react';
import DotsLoader from '../loaders/DotsLoader';
import { Code } from '../styles/styles';


export const DotsDetails = (): JSX.Element => {
  return (
    <span>
      {Code('DotsLoader')}
    </span>
  )
};

const Dots = () => {
  return(
    <div>
        <DotsLoader loading />
    </div>
  )
};


export default Dots;