import React, { FC, ReactElement } from 'react';
import './menuItem.scss';

type PropsType = {
  title: string,
  imageUrl: string,
  size: string
}

const MehuItem: FC<PropsType> = ({ title, imageUrl, size }): ReactElement => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div>
  )
}

export default MehuItem;
