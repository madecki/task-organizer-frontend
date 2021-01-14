import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <>
      <div className='loader__dots'>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <p>LOADING</p>
    </>
  );
}

export default Loader;
