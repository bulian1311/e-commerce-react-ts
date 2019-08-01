import React, { FC, ReactElement } from 'react';
import Directory from '../../components/directory';
import './homePage.scss';

const HomePage: FC = (): ReactElement => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage
