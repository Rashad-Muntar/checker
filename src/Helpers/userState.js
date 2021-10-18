const localUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : false;

export default localUser;
