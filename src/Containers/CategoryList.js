import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryFetcher } from '../Actions/index';
import InitCategory from '../Components/initCategory';
import Category from '../Components/Category';

const CategoryList = () => {
  const user = useSelector((state) => state.userReducer);
  const categoryData = useSelector((state) => state.categoryReducer.data);
  const dispatch = useDispatch();
  console.log(categoryData);

  useEffect(() => {
    dispatch(categoryFetcher());
  }, []);

  return (
    <div className="Cat-wrapper">

      {user.user
        ? categoryData.included && (categoryData.included.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            <Category
              key={category.id}
              title={category.attributes.title}
              progress={category.attributes.progress}
            />
          </Link>
        ))
        )
        : <InitCategory />}
    </div>
  );
};

export default CategoryList;
