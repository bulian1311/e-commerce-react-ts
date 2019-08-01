import React, { FC, ReactElement } from 'react';
import './MenuItem.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type PropsType = RouteComponentProps & {
  title: string,
  imageUrl: string,
  size: string,
  linkUrl: string
}

const MenuItem: FC<PropsType> = ({ title, imageUrl, linkUrl, size, history }): ReactElement => {
  return (
    <div
      onClick={() => history.push(linkUrl)}
      className={`${size} menu-item`}
    >
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

export default withRouter(MenuItem);
