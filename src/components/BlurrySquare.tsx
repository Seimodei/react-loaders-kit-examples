import React from 'react';
import BlurrySquareLoader from '../loaders/BlurrySquareLoader';
import { Code } from '../styles/styles';


export const BlurrySquareDetails = (): JSX.Element => {
  return (
    <span>
      {Code('BlurrySquareLoader')}
    </span>
  )
};

const BlurrySquare = () => {
  return(
    <div>
        <BlurrySquareLoader loading />
    </div>
  )
};


export default BlurrySquare;