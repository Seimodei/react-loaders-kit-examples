import React from 'react';
import LiquidLoader from '../loaders/LiquidLoader';
import { Code } from '../styles/styles';


export const LiquidDetails = (): JSX.Element => {
  return (
    <span>
      {Code('LiquidLoader')}
    </span>
  )
};

const Liquid = () => {
  return(
    <LiquidLoader loading />
  )
};


export default Liquid;