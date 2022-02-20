import ImageResize from 'image-resize';

export function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function renameFile(file, name) {
  return Array.from(file).map((file) => {
    const blob = file.slice(0, file.size, 'image/png');
    const newFile = new File([blob], name, { type: 'image/png' });
    return newFile;
  });
}

export const renameFileWithName = ({ file, name }) => {
  const blob = file.slice(0, file.size, 'image/png');
  const newFile = new File([blob], name, { type: 'image/png' });
  return newFile;
};

export function renameFiles(files) {
  return Array.from(files).map((file, index) => {
    const blob = file.slice(0, file.size, 'image/png');
    const newFile = new File([blob], index, { type: 'image/png' });
    return newFile;
  });
}

export function renameFilesFromLastIndex(files, start) {
  return Array.from(files).map((file, index) => {
    const blob = file.slice(0, file.size, 'image/png');
    const newFile = new File([blob], parseInt(index + +start + 1), { type: 'image/png' });
    console.log(newFile);
    return newFile;
  });
}
export const resizeImageWidth = async ({ width, file }) => {
  let imageResize = new ImageResize();
  const resizedFile = await imageResize
    .updateOptions({ width, format: 'jpg', outputType: 'blob' })
    .play(file);
  return resizedFile;
};
