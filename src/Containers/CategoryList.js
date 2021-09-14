import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryFetcher } from '../Actions/index';
import InitCategory from './initCategory';
// import Category from '../Components/Category';

const CategoryList = () => {
  const user = useSelector((state) => state.userReducer);
  //   const categoryData = useSelector((state) => state.categoryReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryFetcher());
  }, []);

  return (
    <div>
      <InitCategory />
      {user.user ? <p>Testing</p> : <p>DEFAUL ACTEGORYES</p>}
    </div>
  );
};

export default CategoryList;

// (categoryData.map((category) => (
//     <Link to={`/category/${category.id}`} key={category.id} className="a-card-wrapper">
//       <Category
//         key={category.id}
//         title={category.title}
//         percentage={category.percentage}
//       />
//     </Link>
//   ))
//   )
