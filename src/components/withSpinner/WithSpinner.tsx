import React from 'react';
import './WithSpinner.scss';

const WithSpinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...otherProps }: any) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container">
        </div>
      </div>
    ) : <WrappedComponent {...otherProps} />
  }
  return Spinner;
}


export default WithSpinner;
