import React, { FC, ReactElement } from 'react';
import CollectionPreview from '../collectionPreview';
import { CollectionItemType } from '../../utils/types';
import './CollectionOverview.scss';

type PropsType = {
  collections: CollectionItemType[] | null;
}

const CollectionOverview: FC<PropsType> = ({ collections }): ReactElement => {

  return (
    <div className="collections-overview">
      {
        collections &&
        collections.map(
          ({ ...props }: CollectionItemType) => (
            <CollectionPreview
              key={props.id}
              {...props}
            />
          )
        )
      }
    </div>
  )
}

export default CollectionOverview;
