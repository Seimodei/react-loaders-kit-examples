import React from 'react';
import BlobLoader from '../loaders/BlobLoader';
import { Code } from '../styles/styles';


export const BlobDetails = (): JSX.Element => {
  return (
    <span>
      {Code('BlobLoader')}
    </span>
  )
};

const Blob = () => {
  return(
    <div>
        <BlobLoader loading />
    </div>
  )
};


export default Blob;