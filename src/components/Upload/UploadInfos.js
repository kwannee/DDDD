import React from 'react';
import classes from './UploadInfos.module.css';

import UploadDescription from './Infos/UploadDescription';
import UploadImagesInput from './Infos/UploadImagesInput';
import UploadTitle from './Infos/UploadTitle';
import UploadCategory from './Infos/UploadCategory';

const UploadInfos = () => {
  return (
    <div className={classes.infos}>
      <UploadCategory />
      <UploadTitle />
      <UploadDescription />
      <UploadImagesInput />
    </div>
  );
};

export default UploadInfos;
