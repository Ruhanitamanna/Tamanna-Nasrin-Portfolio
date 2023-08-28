import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import textimage from "../../../public/text-svgrepo-com (1).svg";

const AboutMe = () => {
  return (
    <div className="bg-orange-100 p-6 m-6">
      <h3 className="gradient-text text-center">About me</h3>
      <div className="lg:flex justify-between">
        <div>
          <img src={textimage} alt="" />
        </div>
        <div className="-">
          <p className="text-indigo-700">
            Hi there!I am <span className="font-bold">Tamanna Nasrin</span> a
            junior web developer with a background in English literature. I am
            on an exciting journey of translating my creativity into digital
            experiences. Proficient in full-Stack development, I am passionate
            about crafting user-friendly and visually appealing websites. When I
            am not coding, you can find me exploring the latest tech trends and
            collaborating with fellow developers. Lets connect and bring
            innovative web solutions to life!
          </p>
          <div className=" border p-1 flex justify-around">
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
      </div>
    </div>
  );
};

export default AboutMe;
