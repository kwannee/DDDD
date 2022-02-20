import React, { useState } from 'react';
import ModifyInfos from './ModifyInfos';
import ModifyImages from './ModifyImages';
import ModifySubmitButton from './ModifySubmitButton';
import { getDataByPath, removeDataByPath, setDataByPath } from '../../../firebase/utils/db';
import {
  deleteFileByPath,
  deleteFileByRef,
  deleteFolderByPath,
  fetchAllProjectsItemsByPath,
  getFileByPathAsImage,
  getFileByRefAsImage,
  getFilesByPathAsImage,
  uploadFileByPathNoFileName,
  uploadFilesByPath,
} from '../../../firebase/utils/storage';
import { makePath } from '../../../utils/string';
import { useNavigate } from 'react-router-dom';
import { renameFiles, renameFileWithName } from '../../../utils/file';

const Modify = ({ closeModify, infos: infosProp, images: imagesProp }) => {
  const category = infosProp?.category;
  const detailCategory = infosProp?.detailCategory;
  const navigate = useNavigate();
  const { eng } = infosProp?.name;
  const [engName, setEngName] = useState(infosProp?.name?.eng);
  const [korName, setKorName] = useState(infosProp?.name?.kor);
  const [description, setDescription] = useState(infosProp?.description);
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState(imagesProp);

  const prevPath = makePath(`projects/${category}/${detailCategory}/${eng}/`);
  const path = makePath(`projects/${category}/${detailCategory}/${engName}/`);
  const thumbnailPath = makePath(`thumbnails/${category}***${detailCategory}***${eng}`);
  const infos = {
    category,
    detailCategory,
    engName,
    korName,
    description,
  };
  const setMethods = {
    setEngName,
    setKorName,
    setDescription,
    setFiles,
    setImages,
  };

  const [isUploading, setIsUploading] = useState(false);
  const submitModifiedInfoHandler = async () => {
    setIsUploading(true);
    await uploadFiles();
    await updateInfoData();
    if (eng !== engName) {
      await updateProjectsNameChangedFiles();
      await updateWelcomeNameChangedFiles();
      await removeDataByPath(prevPath);
    }
    setIsUploading(false);
    navigate('/main');
  };

  const uploadFiles = async () => {
    if (files) {
      await uploadFilesByPath({ path, files });
    }
  };
  const updateInfoData = async () => {
    const prevData = await getDataByPath(prevPath);
    await removeDataByPath(path);
    const data = { ...prevData, name: { eng: engName, kor: korName }, description };
    await setDataByPath({
      path,
      data,
    });
  };
  const updateProjectsNameChangedFiles = async () => {
    await updateThumbnail();
    await updateProjects();
  };
  const updateThumbnail = async () => {
    const newName = makePath(`${category}***${detailCategory}***${engName}`);
    const newThumbnail = await getFileByPathAsImage({ path: thumbnailPath, name: newName });
    await uploadFileByPathNoFileName({
      path: 'thumbnails/' + newName,
      file: newThumbnail,
    });
    await deleteFileByPath(makePath(`thumbnails/${category}***${detailCategory}***${eng}`));
  };
  const updateProjects = async () => {
    const projectPath = prevPath;
    const prevFiles = await getFilesByPathAsImage(projectPath);
    await uploadFilesByPath({ path, files: prevFiles });
    await deleteFolderByPath(prevPath);
  };

  const updateWelcomeNameChangedFiles = async () => {
    const welcomeItems = await fetchAllProjectsItemsByPath('welcome/');
    const prevPath = `${category}***${detailCategory}***${eng}`;
    const targetItems = welcomeItems.filter((item) => item.name.includes(prevPath));
    const targetFiles = await Promise.all(
      targetItems.map(async (item) => await getFileByRefAsImage(item)),
    );
    const renamedTargetItems = targetFiles.map((file) =>
      renameFileWithName({ file, name: file.name.replace(eng, engName) }),
    );
    await uploadFilesByPath({ path: 'welcome/', files: renamedTargetItems });
    for (const file of targetItems) {
      deleteFileByRef(file);
    }
  };
  return (
    <>
      <ModifyImages images={images} />
      <div>
        <ModifyInfos
          closeModify={closeModify}
          infos={infos}
          images={images}
          originImages={imagesProp}
          setMethods={setMethods}
        />
        <ModifySubmitButton onClick={submitModifiedInfoHandler} />
        {isUploading && <p>업로딩 중입니다...</p>}
      </div>
    </>
  );
};

export default Modify;
