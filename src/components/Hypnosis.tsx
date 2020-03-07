import React from 'react';
import HypnosisLoader from '../loaders/HypnosisLoader';
import { Code } from '../styles/styles';


export const HypnosisDetails = (): JSX.Element => {
  return (
    <span>
      {Code('HypnosisLoader')}
    </span>
  )
};

const Hypnosis = () => {
  return(
    <div>
        <HypnosisLoader loading />
    </div>
  )
};


export default Hypnosis;