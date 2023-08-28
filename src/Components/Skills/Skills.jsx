const Skills = () => {
  return (
    <div className="border-2 p-6  bg-orange-100">
      <div>
        <h3 className="text-4xl font-semibold text-center gradient-text ">
          SkillSet
        </h3>
      </div>
      <div className="lg:flex justify-around gap-3 p-2">
        <div className="border my-2 p-2 text-indigo-700">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>BootsTrap</li>
            <li>TailWind</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="border my-2 p-2  text-indigo-700">
          <ul>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Git and GitHub</li>
            <li>Responsive Web Design</li>
            <li>RESTful APIs</li>
            <li> React Form</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
          </ul>
        </div>
        <div className="border my-2 p-2 text-indigo-700">
          <ul>
            <li>TanStack Query</li>
            <li>Axios </li>
            <li>JWT Token</li>
            <li>Payment Method Integration </li>
            <li>Material UI</li>
            <li>Daisy UI</li>
            <li>Next.js</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
