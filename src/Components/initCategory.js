import { Link } from 'react-router-dom';
import '../assets/styles/category.css';

const InitCategory = () => (
  <>
    <Link to="/login">
      <div className="card-wrapper">
        <i className="futbol outline icon" />
        <span>Exercise</span>
        <div className="timer-area">
          <span>0hr : 0min</span>
        </div>
      </div>
    </Link>
    <Link className="body" to="/login">
      <div className="card-wrapper">
        <i className="utensils icon" />
        <span>Diet</span>
        <div className="timer-area">
          <span>0hr : 0min</span>
        </div>
      </div>
    </Link>
    <Link className="body" to="/login">
      <div className="card-wrapper">
        <i className="briefcase icon" />
        <span>Work</span>
        <div className="timer-area">
          <span>0hr : 0min</span>
        </div>
      </div>
    </Link>
    <Link className="body" to="/login">
      <div className="card-wrapper">
        <i className="book icon" />
        <span>Reading</span>
        <div className="timer-area">
          <span>0hr : 0min</span>
        </div>
      </div>
    </Link>
    <Link className="body" to="/login">
      <div className="card-wrapper">
        <i className="bed icon" />
        <span>Sleep</span>
        <div className="timer-area">
          <span>0hr : 0min</span>
        </div>
      </div>
    </Link>
    <Link className="body" to="/login">
      <div className="card-wrapper">
        <i className="users icon" />
        <span>Social</span>
        <div className="timer-area">
          <span>0hr : 0min</span>
        </div>
      </div>
    </Link>
  </>
);

export default InitCategory;
