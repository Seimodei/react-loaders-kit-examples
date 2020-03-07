import React from 'react';
import BouncyBallsLoader from '../loaders/BouncyBallsLoader';
import { Code } from '../styles/styles';


export const BouncyBallsDetails = (): JSX.Element => {
  return (
    <span>
      {Code('BouncyBallsLoader')}
    </span>
  )
};

const BouncyBalls = () => {
  return(
    <div>
        <BouncyBallsLoader loading />
    </div>
  )
};


export default BouncyBalls;