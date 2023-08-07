import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Are you tired of losing track of your job applications? Looking for
            an efficient way to stay on top of your job hunting game? Say hello
            to Jobify, the web-based job tracking app that simplifies your job
            search and empowers you to take control of your career journey.
          </p>
          <p>
            Jobify is designed with job hunters like you in mind. With our
            user-friendly dashboard, you can effortlessly enter and manage all
            your job applications in one place. Keep tabs on application
            deadlines, interview dates, and status updates with ease. No more
            juggling spreadsheets or sticky notes - Jobify streamlines the
            process, so you can focus on what matters most: landing your dream
            job.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
