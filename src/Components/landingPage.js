import { Link } from 'react-router-dom';
import '../assets/styles/LandingPage.css';

const LandingPage = () => (
  <div className="landing-wrapper">
    <div className="round-circle">
      <p className="header">Total Hours</p>
      <p>0hour : 0min : 0sec</p>
    </div>
    <Link to="/">Add Activity</Link>
  </div>
);

export default LandingPage;
