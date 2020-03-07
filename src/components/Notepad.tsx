import React from 'react';
import NotepadLoader from '../loaders/NotepadLoader';
import { Code } from '../styles/styles';


export const NotepadDetails = (): JSX.Element => {
  return (
    <span>
      {Code('NotepadLoader')}
    </span>
  )
};

const Notepad = () => {
  return(
    <div>
        <NotepadLoader loading />
    </div>
  )
};


export default Notepad;