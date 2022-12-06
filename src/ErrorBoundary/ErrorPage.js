import React from 'react'
import { Button } from '@mui/material'
import warningIcon from '../assets/warning.gif';
import './ErrorPage.css';

const ErrorPage = ({error, componentStack, resetErrorBoundary}) => {
  return (
    <div
      className='error-page'
    >
      <img src={warningIcon} alt='error occured'className='warning-icon' />
      <div
        className="error-message"
      >
        <h1>Something went wrong:</h1>
        <p>{error.message}</p>
        <p>{componentStack}</p>
        <Button onClick={resetErrorBoundary} className="button">Try again</Button>
      </div>
    </div>
  )
}

export default ErrorPage