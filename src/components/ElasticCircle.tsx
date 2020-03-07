import React from 'react';
import ElasticCircleLoader from '../loaders/ElasticCircleLoader';
import { Code } from '../styles/styles';


export const ElasticCircleDetails = (): JSX.Element => {
  return (
    <span>
      {Code('ElasticCircleLoader')}
    </span>
  )
};

const ElasticCircle = () => {
  return(
    <div>
        <ElasticCircleLoader loading />
    </div>
  )
};


export default ElasticCircle;