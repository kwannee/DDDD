import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Categories.module.css';
import DetailCategories from './DetailCategories';
import { CATEGORIES, DETAIL_CATEGORIES } from '../../constants';

const Categories = () => {
  const location = useLocation();
  useEffect(() => {
    const [, pathname, category, detailCategory = 'not-detail-category'] =
      location.pathname.split('/');
    if (pathname === 'projects' || pathname === 'project') {
      setClickedCategory(category.replaceAll('%20', ' ').toLocaleLowerCase());
      setClickedDetailCategory(detailCategory.replaceAll('%20', ' ').toLocaleLowerCase());
    } else {
      setClickedCategory();
      setClickedDetailCategory();
    }
  }, [location.pathname]);
  const [clickedCategory, setClickedCategory] = useState('');
  const [clickedDetailCategory, setClickedDetailCategory] = useState('');
  return (
    <div className={classes.wrapper}>
      <ul className={classes.categories}>
        {CATEGORIES.map((category) => {
          const lowerCasedCategory = category.toLocaleLowerCase();
          return (
            <li
              key={category}
              className={`${classes.category} ${
                clickedCategory === lowerCasedCategory ? classes.activeCategory : ''
              }`}
            >
              <Link to={`/projects/${lowerCasedCategory}`} className="category">
                <p>{category}</p>
              </Link>
              <ul
                className={`${classes.categoryDetail} ${
                  clickedCategory === lowerCasedCategory ? classes.activeDetail : ''
                }`}
              >
                <DetailCategories
                  detailCategory={DETAIL_CATEGORIES}
                  category={category}
                  clickedDetailCategory={clickedDetailCategory}
                />
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
