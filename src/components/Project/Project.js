import React, { useState, useLayoutEffect, useCallback, useEffect } from 'react';
import classes from './Project.module.css';
import ProjectImages from './ProjectImages';
import ProjectInfos from './ProjectInfos';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectController from './ProjectController';
import { fetchAllImagesByPath } from '../../firebase/utils/storage';
import { getDataByPath } from '../../firebase/utils/db';
import { uploadActions } from '../../store/upload-slice';
import { getAuth } from 'firebase/auth';
import ProjectManageButtons from './ProjectManageButtons';
import Modify from './Modify/Modify';
import { makePath } from '../../utils/string';
import { BLANK_REGEX } from '../../constants';

const isCameFromMain = (path) => path.split('/').length === 2;
const isCameFromCategory = (path) => path.split('/').length === 3;
const getSortedContextList = ({ contextInfo, startingPoint }) => {
  let contextInfoList = Object.values(contextInfo);
  if (isCameFromMain(startingPoint)) {
    contextInfoList = contextInfoList
      .flatMap((project) => Object.values(project))
      .flatMap((project) => Object.values(project));
  } else if (isCameFromCategory(startingPoint)) {
    contextInfoList = contextInfoList.flatMap((project) => Object.values(project));
  }
  contextInfoList.sort((p1, p2) => new Date(p2.date) - new Date(p1.date));
  return contextInfoList;
};

const Project = () => {
  const auth = getAuth();

  const [images, setImages] = useState([]);
  const [info, setInfo] = useState({});
  const [context, setContext] = useState([]);
  const startingPoint = useSelector((state) => state.path.path);
  const navigate = useNavigate();
  const [, , pathCategory, pathDetail, projectName] = useLocation().pathname.split('/');

  const fetchProjectData = useCallback(async () => {
    const path = makePath(`projects/${pathCategory}/${pathDetail}/${projectName}/`);
    const fetchedImages = await fetchAllImagesByPath(path);
    setImages(fetchedImages);
    const fetchedInfo = await getDataByPath(path);
    setInfo(fetchedInfo);
    const contextInfo = await getDataByPath(startingPoint);
    const contextInfoList = getSortedContextList({ contextInfo, startingPoint });
    setContext(contextInfoList);
  }, [pathCategory, pathDetail, projectName, startingPoint]);

  useLayoutEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  const currentProjectIndex = context?.findIndex(
    (project) => project?.name?.eng === projectName.replace(BLANK_REGEX, ' '),
  );

  const isNotFirstProject = currentProjectIndex !== 0;
  const isNotLastProject = currentProjectIndex !== context.length - 1;

  const prevPath = `/project/${context[currentProjectIndex - isNotFirstProject]?.category}/${
    context[currentProjectIndex - isNotFirstProject]?.detailCategory
  }/${context[currentProjectIndex - isNotFirstProject]?.name?.eng}`;
  const nextPath = `/project/${context[currentProjectIndex + isNotLastProject]?.category}/${
    context[currentProjectIndex + isNotLastProject]?.detailCategory
  }/${context[currentProjectIndex + isNotLastProject]?.name?.eng}`;

  const [showPrevAlert, setShowPrevAlert] = useState(false);
  const [showNextAlert, setShowNextAlert] = useState(false);
  const clickPrevHandler = () => {
    if (isNotFirstProject) {
      navigate(prevPath);
      return;
    }
    setShowPrevAlert(true);
    setTimeout(() => {
      setShowPrevAlert(false);
    }, 1500);
  };
  const clickNextHandler = () => {
    if (isNotLastProject) {
      navigate(nextPath);
      return;
    }
    setShowNextAlert(true);
    setTimeout(() => {
      setShowNextAlert(false);
    }, 1500);
  };

  const [modify, setModify] = useState(false);
  const dispatch = useDispatch();
  const toggleModifyHandler = () => {
    setModify((prev) => !prev);
    dispatch(uploadActions.clearState());
  };
  const closeModify = () => {
    setModify(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.projectLayout}>
        {auth.currentUser && <ProjectManageButtons toggleModifyHandler={toggleModifyHandler} />}
        <div className={classes.contents}>
          {modify ? (
            <Modify closeModify={closeModify} infos={info} images={images} />
          ) : (
            <>
              <ProjectImages images={images} />
              <ProjectInfos infos={info} />
            </>
          )}
        </div>
        {!modify ? (
          <ProjectController
            showPrevAlert={showPrevAlert}
            showNextAlert={showNextAlert}
            onNextClick={clickNextHandler}
            onPrevClick={clickPrevHandler}
          />
        ) : (
          <div style={{ height: '20%' }}></div>
        )}
      </div>
    </div>
  );
};

export default Project;
