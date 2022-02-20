import React, { useState } from 'react';
import classes from './ModifyCategory.module.css';
import { CATEGORY_OPTIONS, DETAILCATEGORY_OPTIONS } from '../../../constants';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';

const ModifyCategory = ({ category, detailCategory }) => {
  return (
    <div className={classes.wrapper}>
      <form>
        <label>카테고리</label>
        <select disabled value={category}>
          <option disabled selected value>
            카테고리를 선택해주세요.
          </option>
          {CATEGORY_OPTIONS}
        </select>
      </form>
      <form>
        <label>세부 카테고리</label>
        <select disabled value={detailCategory}>
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
