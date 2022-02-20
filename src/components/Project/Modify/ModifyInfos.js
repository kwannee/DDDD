import React from 'react';
import ModifyCategory from './ModifyCategory';
import ModifyDescription from './ModifyDescription';
import ModifyImagesInput from './ModifyImagesInput';
import classes from './ModifyInfos.module.css';
import ModifyTitle from './ModifyTitle';

const ModifyInfos = ({ infos, images, setMethods, originImages }) => {
  const { engName, korName, description } = infos;
  return (
    <div className={classes.modify}>
      <ModifyCategory category={infos?.category} detailCategory={infos?.detailCategory} />
      <ModifyTitle
        engName={engName}
        korName={korName}
        setEngName={setMethods.setEngName}
        setKorName={setMethods.setKorName}
      />
      <ModifyDescription description={description} setDescription={setMethods.setDescription} />
      <ModifyImagesInput
        setFiles={setMethods.setFiles}
        setImages={setMethods.setImages}
        images={images}
        originImages={originImages}
      />
    </div>
  );
};

export default ModifyInfos;
