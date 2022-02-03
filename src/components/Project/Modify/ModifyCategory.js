import React, { useState } from 'react';
import classes from './ModifyCategory.module.css';
import { CATEGORY_OPTIONS, DETAILCATEGORY_OPTIONS } from '../../../constants';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';
const ModifyCategory = ({ category: categoryProp, detailCategory: detailCategoryProp }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categoryProp ? categoryProp : 'Dream');
  const [detailCategory, setDetailCategory] = useState(
    detailCategoryProp ? detailCategoryProp : '',
  );

  const changeCategoryHandler = (e) => {
    setCategory(e.target.value);
    dispatch(uploadActions.setCategory(e.target.value));
  };
  const changeDetailCategoryHandler = (e) => {
    setDetailCategory(e.target.value);
    dispatch(uploadActions.setDetailCategory(e.target.value));
  };

  return (
    <div className={classes.wrapper}>
      <form>
        <label>카테고리</label>
        <select value={category} onChange={changeCategoryHandler}>
          <option disabled selected value>
            카테고리를 선택해주세요.
          </option>
          {CATEGORY_OPTIONS}
        </select>
      </form>
      <form>
        <label>세부 카테고리</label>
        <select value={detailCategoryProp} onChange={changeDetailCategoryHandler}>
          <option disabled selected value>
            세부 카테고리를 선택해주세요.
          </option>
          {DETAILCATEGORY_OPTIONS(category)}
        </select>
      </form>
    </div>
  );
};

export default ModifyCategory;
