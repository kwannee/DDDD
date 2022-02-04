import React from 'react';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';
import { readFileAsync, renameFiles, resizeImageWidth } from '../../../utils/file';

const MainProjectsImagesInput = () => {
  const dispatch = useDispatch();

  const inputFilesHandler = async (e) => {
    const renamedFilesArray = renameFiles(e.target.files);
    const thumbnail = await resizeImageWidth({ width: 250, file: e.target.files[0] });
    dispatch(uploadActions.setThumbnail(thumbnail));
    const images = await Promise.all(
      Array.from(e.target.files).map(async (file) => {
        return { src: await readFileAsync(file) };
      }),
    );
    dispatch(uploadActions.setFiles(renamedFilesArray));
    dispatch(uploadActions.setImages(images));
  };
  return (
    <form>
      <input onChange={inputFilesHandler} type="file" multiple />
    </form>
  );
};

export default MainProjectsImagesInput;
