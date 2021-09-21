import { Link } from 'react-router-dom';
import '../assets/styles/category.css';

const InitCategory = () => (
  <>
    <Link className="body" to="/login">
      <i className="futbol outline icon" />
      <h3>Exercise</h3>
      <p>0hr : 0min</p>
    </Link>
    <Link className="body" to="/login">
      <i className="utensils icon" />
      <h3>Diet</h3>
      <p>0hr : 0min</p>
    </Link>
    <Link className="body" to="/login">
      <i className="briefcase icon" />
      <h3>Work</h3>
      <p>0hr : 0min</p>
    </Link>
    <Link className="body" to="/login">
      <i className="book icon" />
      <h3>Reading</h3>
      <p>0hr : 0min</p>
    </Link>
    <Link className="body" to="/login">
      <i className="bed icon" />
      <h3>Sleep</h3>
      <p>0hr : 0min</p>
    </Link>
    <Link className="body" to="/login">
      <i className="users icon" />
      <h3>Social</h3>
      <p>0hr : 0min</p>
    </Link>
  </>
);

export default InitCategory;
