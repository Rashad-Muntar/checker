import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <div className="round-circle">
      <p>Total Hours</p>
      <p>0hour : 0min : 0sec</p>
    </div>
    <Link to="/">Add Activity</Link>
  </div>
);

export default LandingPage;
