import React from 'react';
import GooeyLoader1 from '../loaders/GooeyLoader1';
import { Code } from '../styles/styles';


export const Gooey1Details = (): JSX.Element => {
  return (
    <span>
      {Code('GooeyLoader1')}
    </span>
  )
};

const Gooey1 = () => {
  return(
    <div>
        <GooeyLoader1 loading />
    </div>
  )
};


export default Gooey1;