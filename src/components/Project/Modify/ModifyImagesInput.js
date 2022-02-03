import React from 'react';
import { useDispatch } from 'react-redux';
import { readFileAsync, renameFiles } from '../../../utils/file';
import ImageResize from 'image-resize';
import { uploadActions } from '../../../store/upload-slice';

const ModifyImagesInput = () => {
  const dispatch = useDispatch();

  const inputFilesHandler = async (e) => {
    const renamedFilesArray = renameFiles(e.target.files);
    let imageResize = new ImageResize();
    const thumbnail = await imageResize
      .updateOptions({ width: 250, format: 'jpg', outputType: 'blob' })
      .play(e.target.files[0]);
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

export default ModifyImagesInput;
