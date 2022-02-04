import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFileByPath, uploadFilesByPath } from '../../../firebase/utils/storage';
import { uploadActions } from '../../../store/upload-slice';
import classes from './MainProjects.module.css';
import MainProjectsCategory from './MainProjectsCategory';
import MainProjectsGrid from './MainProjectsGrid';
import MainProjectsImages from './MainProjectsImages';
import MainProjectsUploadButton from './MainProjectsUploadButton';

const MainProjects = ({ images }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const category = useSelector((state) => state.upload.category);
  const detailCategory = useSelector((state) => state.upload.detailCategory);
  const name = useSelector((state) => state.upload.name.eng);
  const paths = useSelector((state) => state.upload.paths);
  const submitImagesHandler = async () => {
    setUploading(true);
    const files = await Promise.all(
      paths.map(async (path) => {
        const filePath = `projects/${category}/${detailCategory}/${name}/${path}`;
        return await getFileByPath({
          path: filePath,
          name: `${category}***${detailCategory}***${name}***${path}`,
        });
      }),
    );
    dispatch(uploadActions.clearState());
    await uploadFilesByPath({ path: 'welcome/', files });
    window.location.reload();
    setUploading(false);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.projectLayout}>
        <div className={classes.contents}>
          <MainProjectsImages images={images} />
          <div>
            <MainProjectsCategory />
            <MainProjectsGrid />
          </div>
          <MainProjectsUploadButton onClick={submitImagesHandler} />
        </div>
        <div className={classes.error}>
          {error}
          {uploading && '업로딩 중...'}
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
