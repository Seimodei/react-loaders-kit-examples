import React from 'react';
import ClockLoader from '../loaders/ClockLoader';
import { Code } from '../styles/styles';


export const ClockDetails = (): JSX.Element => {
  return (
    <span>
      {Code('ClockLoader')}
    </span>
  )
};

const Clock = () => {
  return(
    <div>
        <ClockLoader loading />
    </div>
  )
};


export default Clock;