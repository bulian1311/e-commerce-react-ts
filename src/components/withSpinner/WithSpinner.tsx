import React, { FunctionComponent, ComponentClass } from 'react';
import './WithSpinner.scss';

const WithSpinner = (WrappedComponent: FunctionComponent | ComponentClass) => {
  const Spinner: FunctionComponent = ({ isLoading, ...otherProps }: any) => {
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
