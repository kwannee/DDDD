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
  console.log(new File(file, { type: 'image/png' }));
  return Array.from(file).map((file) => {
    const blob = file.slice(0, file.size, 'image/png');
    const newFile = new File([blob], name, { type: 'image/png' });
    return newFile;
  });
}

export function renameFiles(files) {
  return Array.from(files).map((file, index) => {
    const blob = file.slice(0, file.size, 'image/png');
    const newFile = new File([blob], index, { type: 'image/png' });
    return newFile;
  });
}
