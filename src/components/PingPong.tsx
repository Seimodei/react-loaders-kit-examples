import React from 'react';
import PingPongLoader from '../loaders/PingPongLoader';
import { Code } from '../styles/styles';


export const PingPongDetails = (): JSX.Element => {
  return (
    <span>
      {Code('PingPongLoader')}
    </span>
  )
};

const PingPong = () => {
  return(
    <div>
        <PingPongLoader loading size={120} />
    </div>
  )
};


export default PingPong;