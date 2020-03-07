import React from 'react';
import EightBitLoader from '../loaders/EightBitLoader';
import { Code } from '../styles/styles';


export const EightBitDetails = (): JSX.Element => {
  return (
    <span>
      {Code('EightBitLoader')}
    </span>
  )
};

const EightBit = () => {
  return(
    <div>
        <EightBitLoader loading />
    </div>
  )
};


export default EightBit;