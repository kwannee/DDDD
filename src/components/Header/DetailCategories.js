import React from 'react';
import { Link } from 'react-router-dom';
import classes from './DetailCategories.module.css';

const DetailCategories = ({ detailCategory, category, clickedDetailCategory }) => {
  return (
    <>
      {detailCategory[category].map((detailCategory) => {
        const lowerCasedDeatilCategory = detailCategory.toLocaleLowerCase();
        return (
          <li
            key={Math.round(Math.random() * 1000000)}
            className={`${classes.category} ${
              clickedDetailCategory === lowerCasedDeatilCategory ? classes.activeDetailCategory : ''
            }`}
          >
            <Link
              className="detail-category"
              to={`/projects/${category.toLocaleLowerCase()}/${lowerCasedDeatilCategory}`}
            >
              {detailCategory}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default DetailCategories;
