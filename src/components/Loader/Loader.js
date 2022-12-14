import React from 'react'
import music from '../../assets/music.gif';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loading-page'>
        <img src={music} alt="loading" className='loader' />
        <p>Fetching data ...</p>
    </div>
  )
}

export default Loader