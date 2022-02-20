import React from 'react';
import { readFileAsync, renameFilesFromLastIndex } from '../../../utils/file';

const ModifyImagesInput = ({ setFiles, setImages, images, originImages }) => {
  const inputFilesHandler = async (e) => {
    const prevlastImageIndex = originImages[originImages.length - 1]?.name;
    console.log(originImages);
    console.log(prevlastImageIndex);
    const renamedFilesArray = renameFilesFromLastIndex(e.target.files, prevlastImageIndex);
    const previewImagesArray = await Promise.all(
      Array.from(e.target.files).map(async (file) => {
        return { src: await readFileAsync(file), name: file.name };
      }),
    );
    setFiles(renamedFilesArray);
    setImages(originImages.concat(previewImagesArray));
  };

  return (
    <form>
      <input onChange={inputFilesHandler} type="file" multiple />
    </form>
  );
};

export default ModifyImagesInput;
