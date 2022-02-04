import React, { useEffect, useState } from 'react';
import classes from './MainProjectsGrid.module.css';
import { fetchAllImagesByPath, getFileByPath } from '../../../firebase/utils/storage';
import { useSelector } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';
import { useDispatch } from 'react-redux';

const MainProjectsGrid = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.upload.category);
  const detailCategory = useSelector((state) => state.upload.detailCategory);
  const name = useSelector((state) => state.upload.name.eng);

  const [clickedImages, setClickedImages] = useState([]);
  const [gridImages, setGridImages] = useState([]);
  const fetchGridImages = async () => {
    setGridImages([]);
    if (!name) {
      setClickedImages([]);
      return;
    }
    const images = await fetchAllImagesByPath(`projects/${category}/${detailCategory}/${name}`);
    setGridImages(images);
  };

  useEffect(() => {
    fetchGridImages();
    setClickedImages([]);
  }, [category, detailCategory, name]);

  const choiceImageHanlder = (e) => {
    let list;
    if (clickedImages.includes(e.target.name)) {
      const filteredImages = clickedImages.filter((image) => image !== e.target.name);
      list = [...filteredImages];
      setClickedImages(filteredImages);
    } else {
      list = clickedImages.concat(e.target.name);
      setClickedImages((prev) => [...prev, e.target.name]);
    }
    dispatch(uploadActions.setMainProjectImagePath(list));
  };

  return (
    <div className={classes.wrapper}>
      {gridImages?.map((image) => (
        <img
          onClick={choiceImageHanlder}
          className={`${classes.image} ${
            clickedImages.includes(image.name) ? classes.choiced : ''
          }`}
          name={image.name}
          src={image.src}
          alt={image.name}
        />
      ))}
    </div>
  );
};

export default MainProjectsGrid;
