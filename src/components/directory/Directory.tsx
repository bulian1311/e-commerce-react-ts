import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import './Directory.scss';

import { DirectoryItemType, RootState } from '../../utils/types';

type PropsType = {
  sections: DirectoryItemType[]
}

const Directory: FC<PropsType> = ({ sections }): ReactElement => {


  return (
    <div className="directory-menu">
      {
        sections.map(({ ...props }: DirectoryItemType) => (
          <MenuItem
            key={props.id}
            {...props}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
