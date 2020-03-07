import React from 'react';
import TextureLoader from '../loaders/TextureLoader';
import { Code } from '../styles/styles';


export const TextureDetails = (): JSX.Element => {
  return (
    <span>
      {Code('TextureLoader')}
    </span>
  )
};

const Texture = () => {
  return(
    <div>
        <TextureLoader loading />
    </div>
  )
};


export default Texture;