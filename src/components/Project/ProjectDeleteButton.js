import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BLANK_REGEX } from '../../constants';
import { removeDataByPath } from '../../firebase/utils/db';
import { deleteFileByPath, deleteFolderByPath } from '../../firebase/utils/storage';
import classes from './ProjectDeleteButton.module.css';
const ProjectDeleteButton = () => {
  const navigate = useNavigate();
  const [, , category, detailCategory, projectName] = useLocation()
    .pathname.replace(BLANK_REGEX, ' ')
    .split('/');

  const deleteProjectHandler = async () => {
    if (window.confirm('이 게시글을 삭제하시겠습니까?')) {
      const path = `projects/${category}/${detailCategory}/${projectName}`;
      const thumbnailPath = `thumbnails/${category}***${detailCategory}***${projectName}`;
      await deleteFileByPath(thumbnailPath);
      await deleteFolderByPath(path);
      await removeDataByPath(path);
      setTimeout(() => {
        navigate(`/main`);
      }, 3000);
    }
  };

  return (
    <div className={classes['delete-btn-div']}>
      <p onClick={deleteProjectHandler} className={classes['delete-btn']}>
        x
      </p>
    </div>
  );
};

export default ProjectDeleteButton;
