import { NavLink, Outlet } from "react-router-dom";
import image1 from "../assets/Photo2.jpg";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <Footer></Footer>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          See More
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <div className="p-1">
            <div className="avatar first-letter:">
              <div className="w-24 rounded-full">
                <img src={image1} />
              </div>
            </div>
            <div>
              <h4>Tamanna Nasrin</h4>
              <p>Full Stack Developer</p>
              <div className=" p-1 border flex justify-around">
                <a
                  href="https://drive.google.com/file/d/1R_wt3XdQe2zx3mZ2ql425ugz_KzAk-Nn/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload></FaDownload>CV
                </a>

                <a href="mailto:tamannanasrin571@gmail.com">
                  <FaEnvelope></FaEnvelope>
                </a>
                <a
                  href="https://www.linkedin.com/in/tamanna-nasrin-9983b6b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  href="https://github.com/Ruhanitamanna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub></FaGithub>
                </a>
              </div>
            </div>
          </div>

          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/skills"> Skills</NavLink>
          </li>
          <li>
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
