import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import ErrorPage from './ErrorBoundary/ErrorPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary  FallbackComponent={ErrorPage}>
    <App />
    </ErrorBoundary>
  </React.StrictMode>
);

