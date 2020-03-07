import React from 'react';
import BatteryLoader from '../loaders/BatteryLoader';
import { Code } from '../styles/styles';


export const BatteryDetails = (): JSX.Element => {
  return (
    <span>
      {Code('BatteryLoader')}
    </span>
  )
};

const Battery = () => {
  return(
    <div>
        <BatteryLoader loading />
    </div>
  )
};


export default Battery;