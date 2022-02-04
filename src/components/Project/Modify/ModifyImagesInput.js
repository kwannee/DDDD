import React from 'react';
import { useDispatch } from 'react-redux';
import { readFileAsync, renameFilesFromLastIndex } from '../../../utils/file';
import { uploadActions } from '../../../store/upload-slice';
import { useSelector } from 'react-redux';

const ModifyImagesInput = () => {
  const dispatch = useDispatch();
  //   const prevFiles = useSelector((state) => state.upload.files);
  const prevImages = useSelector((state) => state.upload.images);
  const inputFilesHandler = async (e) => {
    const prevlastImageIndex = prevImages[prevImages.length - 1]?.name;
    const renamedFilesArray = renameFilesFromLastIndex(e.target.files, prevlastImageIndex);
    const images = await Promise.all(
      Array.from(e.target.files).map(async (file) => {
        return { src: await readFileAsync(file) };
      }),
    );

    dispatch(uploadActions.setFiles(renamedFilesArray));
    dispatch(uploadActions.setImages(prevImages.concat(images)));
  };

  return (
    <form>
      <input onChange={inputFilesHandler} type="file" multiple />
    </form>
  );
};

export default ModifyImagesInput;
