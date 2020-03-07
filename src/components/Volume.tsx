import React from 'react';
import VolumeLoader from '../loaders/VolumeLoader';
import { Code } from '../styles/styles';


export const VolumeDetails = (): JSX.Element => {
  return (
    <span>
      {Code('VolumeLoader')}
    </span>
  )
};

const Volume = () => {
  return(
    <div>
        <VolumeLoader loading />
    </div>
  )
};


export default Volume;