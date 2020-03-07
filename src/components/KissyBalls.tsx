import React from 'react';
import KissyBallsLoader from '../loaders/KissyBallsLoader';
import { Code } from '../styles/styles';


export const KissyBallsDetails = (): JSX.Element => {
  return (
    <span>
      {Code('KissyBallsLoader')}
    </span>
  )
};

const KissyBalls = () => {
  return(
    <div>
        <KissyBallsLoader loading />
    </div>
  )
};


export default KissyBalls;