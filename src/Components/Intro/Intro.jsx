import { useEffect, useRef } from "react";
import image from "../../assets/Photo1.png";
// import "animate.css";
import Typed from "typed.js";
import "./Intro.css";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Tamanna</i> Nasrin.",
        " a Mern Stack",
        " Junior web Dveloper",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="my-2 p-2">
      <div className="lg:flex justify-between  bg-orange-100">
        <div className="text-center m-2 p-2  ">
          <h1 className="text-2xl ">Hi There!</h1>

          <h3 className="text-4xl font-semibold text-blue-950">I am</h3>

          <div className="App">
            <span className="text-4xl font-bold  gradient-text " ref={el} />
          </div>
          <div className="">
            <p className="text-indigo-700">
              An aspiring web developer fueled by a love for both language and
              technology. With a background in English literature and a current
              pursuit of web development, I am weaving creativity and coding
              into captivating digital solutions. Lets collaborate and bring
              unique ideas to life in the ever-evolving landscape of the web.
            </p>
            <div className=" border flex justify-around">
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
        <div className="lg:w-8/12 border">
          <img className="" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
