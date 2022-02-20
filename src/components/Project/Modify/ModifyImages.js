import { Carousel } from 'antd';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BLANK_REGEX } from '../../../constants';
import {
  deleteFileByPath,
  getFileByPath,
  uploadFileByPathNoFileName,
} from '../../../firebase/utils/storage';
import { uploadActions } from '../../../store/upload-slice';
import { resizeImageWidth } from '../../../utils/file';
import { makePath } from '../../../utils/string';
import classes from './ModifyImages.module.css';

const ModifyImages = ({ images: imagesProp }) => {
  const images = useSelector((state) => state.upload.images);
  const [, , category, detailCategory, projectName] = useLocation()
    .pathname.replace(BLANK_REGEX, ' ')
    .split('/');
  const carouselRef = useRef();
  const clickPrevHandler = () => {
    carouselRef.current.prev();
  };
  const clickNextHandler = () => {
    carouselRef.current.next();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadActions.setImages(imagesProp));
  }, [imagesProp, dispatch]);

  const deleteImageHandler = async (e) => {
    const clickedImageName = e.target.name;
    if (window.confirm('이 그림을 삭제하시겠습니까?')) {
      const firstImageName = imagesProp[0].name;
      if (imagesProp.length === 1) {
        alert('다른 사진을 추가한 후 삭제해주세요.');
        return;
      }
      await deleteFileByPath(
        makePath(`projects/${category}/${detailCategory}/${projectName}/${clickedImageName}`),
      );
      const deletedImages = imagesProp.filter((image) => image.name !== clickedImageName);
      if (clickedImageName === firstImageName) {
        const file = await getFileByPath({
          path: makePath(
            `projects/${deletedImages[0].category}/${deletedImages[0].detailCategory}/${deletedImages[0].projectName}/${deletedImages[0].name}`,
          ),
          name: makePath(`${category}***${detailCategory}***${projectName}`),
        });
        const thumbnail = await resizeImageWidth({ width: 250, file });
        await uploadFileByPathNoFileName({
          path: makePath(`/thumbnails/${category}***${detailCategory}***${projectName}`),
          file: thumbnail,
        });
      }
      window.location.reload();
    }
  };

  return (
    <div style={{ position: 'relative' }} className={classes.gallery}>
      <Carousel ref={carouselRef} autoplay autoplaySpeed={10000}>
        {images.map((image, idx) => (
          <img
            onClick={deleteImageHandler}
            name={image.name}
            key={idx}
            className={classes.image}
            src={image.src}
            alt="imag"
          />
        ))}
      </Carousel>
      <div onClick={clickPrevHandler} className={`${classes.arrow} ${classes.prev}`}></div>
      <div onClick={clickNextHandler} className={`${classes.arrow} ${classes.next}`}></div>
    </div>
  );
};

export default ModifyImages;
