import React from 'react';
import AtomLoader from '../loaders/AtomLoader';
import { Code } from '../styles/styles';


export const AtomDetails = (): JSX.Element => {
  return (
    <span>
      {Code('AtomLoader')}
    </span>
  )
};

const Atom = () => {
  return(
    <div>
        <AtomLoader loading />
    </div>
  )
};


export default Atom;