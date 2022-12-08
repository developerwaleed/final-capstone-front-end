import React from 'react';

const ErrorPageStyles = {};

const ErrorPage = () => (
  <div className="error__page container p-2 m-0 w-100 h-100 bg-light d-flex flex-column justify-content-center" style={ErrorPageStyles}>
    <h1 className="text-center fw-bold">404</h1>
    <p className="text-center">I&apos;m sorry but we couldn&apos;t find the page you&apos;re looking for</p>
  </div>
);

export default ErrorPage;
