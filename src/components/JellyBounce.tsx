import React from 'react';
import JellyBounceLoader from '../loaders/JellyBounceLoader';
import { Code } from '../styles/styles';


export const JellyBounceDetails = (): JSX.Element => {
  return (
    <span>
      {Code('JellyBounceLoader')}
    </span>
  )
};

const JellyBounce = () => {
  return(
    <div>
        <JellyBounceLoader loading />
    </div>
  )
};


export default JellyBounce;