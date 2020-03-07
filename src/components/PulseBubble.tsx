import React from 'react';
import PulseBubbleLoader from '../loaders/PulseBubbleLoader';
import { Code } from '../styles/styles';


export const PulseBubbleDetails = (): JSX.Element => {
  return (
    <span>
      {Code('PulseBubbleLoader')}
    </span>
  )
};

const PulseBubble = () => {
  return(
    <div>
        <PulseBubbleLoader loading />
    </div>
  )
};


export default PulseBubble;