import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import textimage from "../../../public/text-svgrepo-com (1).svg";

const Footer = () => {
  return (
    <footer className="footer  p-10  bg-neutral text-neutral-content">
      <div>
        <img className="w-20 rounded-full" src={textimage} alt="" />
      </div>
      <div>
        <p className="font-bold">
          Tamanna Nasrin <br />
          Contact Number: O1723541400 <br />
          Email:
          <a href="mailto:tamannanasrin571@gmail.com">
            tamannanasrin571@gmail.com
          </a>
          <br />
          Address:Naraynganj, Dhaka Bangladesh
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="  flex justify-around">
          <button className="btn btn-ghost btn-sm">
            <a
              href="https://drive.google.com/file/d/1R_wt3XdQe2zx3mZ2ql425ugz_KzAk-Nn/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="w-8 h-8"></FaDownload>
            </a>
            CV
          </button>
          <a href="mailto:tamannanasrin571@gmail.com">
            <FaEnvelope className="w-8 h-8"></FaEnvelope>
          </a>
          <a
            href="https://www.linkedin.com/in/tamanna-nasrin-9983b6b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8"></FaLinkedin>
          </a>
          <a
            href="https://github.com/Ruhanitamanna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8"></FaGithub>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
