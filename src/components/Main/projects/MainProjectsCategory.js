import React, { useState, useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  CATEGORY_OPTIONS,
  DETAILCATEGORY_OPTIONS,
  DETAIL_CATEGORIES,
} from '../../../constants';
import { getDataByPath } from '../../../firebase/utils/db';
import { uploadActions } from '../../../store/upload-slice';
import classes from './MainProjectsCategory.module.css';

const MainProjectsCategory = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('Dream');
  const [detailCategory, setDetailCategory] = useState('Religion');
  const [projectOptions, setProjectOptions] = useState([]);
  const [projectName, setProjectName] = useState('');

  const changeCategoryHandler = (e) => {
    setCategory(e.target.value);
    setDetailCategory(DETAIL_CATEGORIES[e.target.value][0]);
    dispatch(uploadActions.setCategory(e.target.value));
    dispatch(
      uploadActions.setDetailCategory(DETAIL_CATEGORIES[e.target.value][0]),
    );
  };
  const changeDetailCategoryHandler = (e) => {
    setDetailCategory(e.target.value);
    makeProjectsToOptions();
    dispatch(uploadActions.setDetailCategory(e.target.value));
  };
  const makeProjectsToOptions = async () => {
    const project = await getDataByPath(
      `projects/${category}/${detailCategory}`,
    );
    if (!project) {
      setProjectOptions([]);
      dispatch(uploadActions.setEngName(''));
      return;
    }
    const projectNames = Object.keys(project);
    const options = projectNames.map((name, idx) => (
      <option key={name + idx} value={name}>
        {name}
      </option>
    ));
    setProjectName(projectNames[0]);
    dispatch(uploadActions.setEngName(projectNames[0]));
    setProjectOptions(options);
  };

  useEffect(() => {
    dispatch(uploadActions.setCategory('Dream'));
    dispatch(uploadActions.setDetailCategory('Religion'));
  }, []);

  useLayoutEffect(() => {
    makeProjectsToOptions();
  }, [category, detailCategory]);

  const changeProjectHandler = (e) => {
    setProjectName(e.target.value);
    dispatch(uploadActions.setEngName(e.target.value));
  };
  return (
    <div className={classes.wrapper}>
      <form>
        <label>????????????</label>
        <select value={category} onChange={changeCategoryHandler}>
          <option disabled selected value>
            ??????????????? ??????????????????.
          </option>
          {CATEGORY_OPTIONS}
        </select>
      </form>
      <form>
        <label>?????? ????????????</label>
        <select value={detailCategory} onChange={changeDetailCategoryHandler}>
          {/* <option disabled selected value>
            ?????? ??????????????? ??????????????????.
          </option> */}
          {category && DETAILCATEGORY_OPTIONS(category)}
        </select>
      </form>
      <form>
        <label>???????????? ???</label>
        <select value={projectName} onChange={changeProjectHandler}>
          <option disabled selected value>
            ??????????????? ??????????????????.
          </option>
          {projectOptions}
        </select>
      </form>
    </div>
  );
};

export default MainProjectsCategory;
