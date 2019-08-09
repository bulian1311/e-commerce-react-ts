import React, { FC, ReactElement } from 'react';
import Directory from '../../components/directory';
import './HomePage.scss';

type PropsType = {}

const HomePage: FC<PropsType> = (): ReactElement => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage;