import React, { Component } from 'react';
import MenuItem from '../menuItem';
import './directory.scss';

import { MenuItemType } from '../../utils/types';

type StateType = {
  sections: MenuItemType[]
}

export class Directory extends Component {
  state: StateType = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: 'normal',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: 'normal',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: 'normal',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map((sec: MenuItemType) => (
            <MenuItem
              key={sec.id}
              title={sec.title}
              imageUrl={sec.imageUrl}
              size={sec.size}
            />
          ))
        }
      </div>
    )
  }
}

export default Directory
  ;
