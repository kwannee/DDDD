import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Upload.module.css';

import { NAME_ERROR, DESCRIPTION_ERROR, FILES_ERROR, EMPTY_CETEGORY_ERROR } from '../../constants';
import UploadButton from './UploadButton';
import UploadImages from './UploadImages';
import UploadInfos from './UploadInfos';
import { getAuth } from 'firebase/auth';
import { setDataByPath } from '../../firebase/utils/db';
import { uploadFileByPath, uploadFilesByPath } from '../../firebase/utils/storage';
import { renameFile } from '../../utils/file';
import { uploadActions } from '../../store/upload-slice';

const Upload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/main');
    }
  }, [auth.currentUser, navigate]);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const name = useSelector((state) => state.upload.name);
  const description = useSelector((state) => state.upload.description);
  const files = useSelector((state) => state.upload.files);
  const category = useSelector((state) => state.upload.category);
  const detailCategory = useSelector((state) => state.upload.detailCategory);
  const thumbnail = useSelector((state) => state.upload.thumbnail);

  const submitProjectHandler = async () => {
    if (!category || !detailCategory) {
      errorHandler(EMPTY_CETEGORY_ERROR);
      return;
    }
    if (!name.eng || !name.kor) {
      errorHandler(NAME_ERROR);
      return;
    }
    if (!description) {
      errorHandler(DESCRIPTION_ERROR);
      return;
    }
    if (!files.length) {
      errorHandler(FILES_ERROR);
      return;
    }
    setUploading(true);
    const thumbnailFile = new File([thumbnail], `${category}***${detailCategory}***${name.eng}`, {
      type: 'image/png',
    });
    await uploadFileByPath({
      path: `thumbnails/`,
      file: thumbnailFile,
    });
    await uploadFilesByPath({
      files,
      path: `projects/${category}/${detailCategory}/${name.eng}/`,
    });
    await setDataByPath({
      path: `projects/${category}/${detailCategory}/${name.eng}`,
      data: {
        name,
        description,
        category,
        detailCategory,
        uid: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        date: new Date().toISOString(),
        comments: [],
      },
    });
    setUploading(false);
    dispatch(uploadActions.clearState());
    window.location.reload();
  };

  const errorHandler = (errorName) => {
    setError(errorName);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.projectLayout}>
        <div className={classes.contents}>
          <UploadImages />
          <UploadInfos />
          <UploadButton onClick={submitProjectHandler} />
        </div>
        <div className={classes.error}>
          {error}
          {uploading && '????????? ???...'}
        </div>
      </div>
    </div>
  );
};

export default Upload;
