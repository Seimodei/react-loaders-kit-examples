import React from 'react';
import WaveLoader from '../loaders/WaveLoader';
import { Code } from '../styles/styles';


export const WaveDetails = (): JSX.Element => {
  return (
    <span>
      {Code('WaveLoader')}
    </span>
  )
};

const Wave = () => {
  return(
    <div>
        <WaveLoader loading />
    </div>
  )
};


export default Wave;