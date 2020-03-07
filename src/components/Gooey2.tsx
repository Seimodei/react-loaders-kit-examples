import React from 'react';
import GooeyLoader2 from '../loaders/GooeyLoader2';
import { Code } from '../styles/styles';


export const Gooey2Details = (): JSX.Element => {
  return (
    <span>
      {Code('GooeyLoader2')}
    </span>
  )
};

const Gooey2 = () => {
  return(
    <div>
        <GooeyLoader2 loading />
    </div>
  )
};


export default Gooey2;