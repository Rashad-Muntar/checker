import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryFetcher } from '../Actions/index';

import Category from '../Components/Category';

const CategoryList = () => {
  const categoryData = useSelector((state) => state.categoryReducer.data);
  console.log(categoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryFetcher());
  }, []);

  return (
    <div>
      {
        categoryData.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id} className="a-card-wrapper">
            <Category
              key={category.id}
              title={category.title}
              percentage={category.percentage}
            />
          </Link>
        ))
      }
    </div>
  );
};

export default CategoryList;
