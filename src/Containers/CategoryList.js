import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryFetcher } from '../APIs/calls';
import InitCategory from '../Components/initCategory';
import Category from '../Components/Category';
import '../assets/styles/category.css';

const CategoryList = () => {
  const user = useSelector((state) => state.userReducer);
  const categoryData = useSelector((state) => state.categoryReducer.data);
  const dispatch = useDispatch();
  const localUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(categoryFetcher());
  }, []);

  return (
    <section className="Cat-wrapper">

      {user.user && localUser
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
    </section>
  );
};

export default CategoryList;
