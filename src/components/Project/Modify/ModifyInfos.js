import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';
import ModifyCategory from './ModifyCategory';
import ModifyDescription from './ModifyDescription';
import ModifyImagesInput from './ModifyImagesInput';
import classes from './ModifyInfos.module.css';
import ModifySubmitButton from './ModifySubmitButton';
import ModifyTitle from './ModifyTitle';

const ModifyInfos = ({ infos }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadActions.setCategory(infos?.category));
    dispatch(uploadActions.setDetailCategory(infos?.detailCategory));
    dispatch(uploadActions.setDescription(infos?.description));
    dispatch(uploadActions.setEngName(infos?.name?.eng));
    dispatch(uploadActions.setKorName(infos?.name?.kor));
  }, [dispatch, infos]);

  return (
    <div className={classes.modify}>
      <ModifyCategory category={infos?.category} detailCategory={infos?.detailCategory} />
      <ModifyTitle eng={infos?.name?.eng} kor={infos?.name?.kor} />
      <ModifyDescription description={infos?.description} />
      <ModifyImagesInput />
      <ModifySubmitButton />
    </div>
  );
};

export default ModifyInfos;
