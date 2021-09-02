import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const [activity, setActivity] = useState(null);
  const id = useParams();
  console.log(id.id);

  const getActivitties = async () => {
    try {
      const response = await axios.get(`https://stark-hollows-83409.herokuapp.com/api/categories/${id.id}/activities`);
      const { data } = response;
      setActivity(data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getActivitties();
  }, []);
  return (
    <div>
      <h3>Details pages</h3>
      <h3>{id.id}</h3>
    </div>

  );
};

export default CategoryDetails;
