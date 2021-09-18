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
  const localUser = JSON.parse(localStorage.getItem('user'));
  console.log(categoryData);

  useEffect(() => {
    dispatch(categoryFetcher());
  }, []);

  return (
    <div className="Cat-wrapper">

      {user.user
        ? (categoryData.map((category) => (
          category.user_id === localUser.id
          && (
          <Link to={`/category/${category.id}`} key={category.id}>
            <Category
              key={category.id}
              title={category.title}
              hour={category.hour}
              minute={category.minute}
            />
          </Link>
          )
        ))
        )
        : <InitCategory />}
    </div>
  );
};

export default CategoryList;
