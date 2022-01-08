import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Categories.module.css';
import DetailCategories from './DetailCategories';

const CATEGORIES = ['DESIGN', 'DIGITAL', 'DETAIL', 'DRAWING', 'ETC'];
const DETAIL_CATEGORIES = {
  DESIGN: ['ARCHITECTURE', 'INTERIOR', 'FURNITURE', 'URBAN', 'ETC'],
  DIGITAL: ['SKETCH UP', 'AUTO CAD', 'BIM (REVIT)', 'RENDERING', 'ETC'],
  DETAIL: ['ARCHITECTURE', 'INTERIOR', 'ETC'],
  DRAWING: ['ARCHITECTURE', 'ARCHITECTS', 'INTERIOR', 'ETC'],
  ETC: ['CULTURE', 'BOOKS', 'TRAVEL & EXCURSION', 'MOVIES', 'EXHIBITION', 'MUSIC', 'ETC'],
};

const Categories = () => {
  const location = useLocation();
  useEffect(() => {
    const [, pathname, category, detailCategory = 'not-detail-category'] =
      location.pathname.split('/');
    if (pathname === 'projects' || pathname === 'project') {
      setClickedCategory(category.replaceAll('%20', ' '));
      setClickedDetailCategory(detailCategory.replaceAll('%20', ' '));
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
                {category}
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
