import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDataByPath, setDataByPath } from '../../../firebase/utils/db';
import { uploadFilesByPath } from '../../../firebase/utils/storage';
import { uploadActions } from '../../../store/upload-slice';
import ModifyCategory from './ModifyCategory';
import ModifyDescription from './ModifyDescription';
import ModifyImagesInput from './ModifyImagesInput';
import classes from './ModifyInfos.module.css';
import ModifySubmitButton from './ModifySubmitButton';
import ModifyTitle from './ModifyTitle';

const ModifyInfos = ({ infos, closeModify }) => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.upload.category);
  const detailCategory = useSelector((state) => state.upload.detailCategory);
  const name = useSelector((state) => state.upload.name);
  const description = useSelector((state) => state.upload.description);
  const files = useSelector((state) => state.upload.files);
  const [dataList, setDataList] = useState([
    { category: category },
    { detailCategory: detailCategory },
    { description: description },
    { 'name.eng': name.eng },
    { 'name.kor': name.kor },
  ]);

  const submitModifiedInfoHandler = async () => {
    if (files) {
      await uploadFilesByPath({
        files,
        path: `projects/${category}/${detailCategory}/${name.eng}/`,
      });
    }
    const data = await getDataByPath(
      `projects/${infos.category}/${infos.detailCategory}/${infos.name.eng}`,
    );
    for (const item of dataList) {
      const [key, value] = Object.entries(item)[0];
      console.log(key, value);
      if (value) {
        data[key] = value;
      }
    }
    if (name.eng) {
      data.name.eng = name.eng;
    }
    if (name.kor) {
      data.name.kor = name.kor;
    }
    const uploadCategory = category ? category : infos.category;
    const uploadDetailCategory = detailCategory ? detailCategory : infos.detailCategory;
    const uploadProjectName = name.eng ? name.eng : infos.name.eng;
    setTimeout(async () => {
      await setDataByPath({
        path: `projects/${uploadCategory}/${uploadDetailCategory}/${uploadProjectName}`,
        data,
      });
      dispatch(uploadActions.clearState());
      closeModify();
    }, 1000);
  };

  return (
    <div className={classes.modify}>
      <ModifyCategory category={infos?.category} detailCategory={infos?.detailCategory} />
      <ModifyTitle eng={infos?.name?.eng} kor={infos?.name?.kor} />
      <ModifyDescription description={infos?.description} />
      <ModifyImagesInput />
      <ModifySubmitButton onClick={submitModifiedInfoHandler} />
    </div>
  );
};

export default ModifyInfos;
