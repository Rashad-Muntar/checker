import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const id = useParams();
  console.log(id.id);
  return (
    <div>
      <h3>Details pages</h3>
      <h3>{id.id}</h3>
    </div>

  );
};

export default CategoryDetails;
