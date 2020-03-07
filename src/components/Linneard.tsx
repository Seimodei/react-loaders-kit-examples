import React from 'react';
import LinneardLoader from '../loaders/LinneardLoader';
import { Code } from '../styles/styles';


export const LinneardDetails = (): JSX.Element => {
  return (
    <span>
      {Code('LinneardLoader')}
    </span>
  )
};

const Linneard = () => {
  return(
    <div>
        <LinneardLoader loading />
    </div>
  )
};


export default Linneard;