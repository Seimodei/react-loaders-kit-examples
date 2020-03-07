import React from 'react';
import SlicesLoader from '../loaders/SlicesLoader';
import { Code } from '../styles/styles';


export const SlicesDetails = (): JSX.Element => {
  return (
    <span>
      {Code('SlicesLoader')}
    </span>
  )
};

const Slices = () => {
  return(
    <div>
        <SlicesLoader loading />
    </div>
  )
};


export default Slices;