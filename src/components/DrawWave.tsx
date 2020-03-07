import React from 'react';
import DrawWaveLoader from '../loaders/DrawWaveLoader';
import { Code } from '../styles/styles';


export const DrawWaveDetails = (): JSX.Element => {
  return (
    <span>
      {Code('DrawWaveLoader')}
    </span>
  )
};

const DrawWave = () => {
  return(
    <div>
        <DrawWaveLoader loading />
    </div>
  )
};


export default DrawWave;