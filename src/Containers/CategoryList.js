import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cats, baseUrl } from '../APIs/calls';
import InitCategory from '../Components/initCategory';
import Category from '../Components/Category';
import '../assets/styles/category.css';
import { categoryAction } from '../Actions';

const CategoryList = () => {
  const user = useSelector((state) => state.userReducer);
  const categoryData = useSelector((state) => state.categoryReducer.data);
  const activities = useSelector((state) => state.activityReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const localUser = JSON.parse(localStorage.getItem('user'));

  const updateCats = async () => {
    if (localStorage.getItem('user') != null) {
      const response = await cats(`${baseUrl}/users/${localUser.id}/categories`);
      const categories = await response.data;
      dispatch(categoryAction(categories));
    }
  };

  useEffect(() => {
    updateCats();
  }, [history, user, activities]);

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
