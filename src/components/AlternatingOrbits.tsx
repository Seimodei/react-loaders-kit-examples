import React from 'react';
import AlternatingOrbitsLoader from '../loaders/AlternatingOrbitsLoader';
import { Code } from '../styles/styles';


export const AlternatingOrbitsDetails = (): JSX.Element => {
  return (
    <span>
      {Code('AlternatingOrbitsLoader')}
    </span>
  )
};

const AlternatingOrbits = () => {
  return(
    <div>
        <AlternatingOrbitsLoader loading />
    </div>
  )
};


export default AlternatingOrbits;