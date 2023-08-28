import "./Projects.css";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = "/projects.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => {
        console.log("Error fetching data ", error);
      });
  }, []);
  console.log(projects);

  return (
    <div className="border-2 p-6 m-6 bg-orange-100">
      <div className="text-4xl font-semibold text-center gradient-text my-2">
        My Sample Projects
      </div>

      <div className="lg:flex gap-3 p-2">
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex card-actions justify-end">
                <div>
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm text-indigo-700"
                  >
                    Client
                  </a>
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm text-indigo-700"
                  >
                    Server
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn  btn-ghost btn-sm text-indigo-700"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
