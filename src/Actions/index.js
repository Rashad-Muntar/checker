import axios from 'axios';

export const categoryAction = (data) => ({
  type: 'FETCH-CATEGORIES',
  data,
});

export const categoryFetcher = () => async (dispatch) => {
  try {
    const response = await axios.get('https://stark-hollows-83409.herokuapp.com/api/categories');
    const category = await response.data;
    dispatch(categoryAction(category));
  } catch (error) {
    return error.message;
  }
  return null;
};
