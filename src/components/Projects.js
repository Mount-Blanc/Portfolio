import Card from "./Card";
import "./Projects.css";
import CountryInfo from "../assets/imgs/CountryInfo.png";
import Ecommerce from "../assets/imgs/E-commerce.png";
import letusfaire from "../assets/imgs/letusfaire.png";

function Projects() {
  const projects = [
    {
      name: "CountryInfo",
      image: CountryInfo,
      Weblink: "https://countryinfo.herokuapp.com/",
      githublink: "https://github.com/Mount-Blanc/CountryInfo",
      react: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
      ),
      typescript: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />
      ),
      graphql: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
        />
      ),
      node: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />
      ),
      express: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />
      ),
      heroku: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
        />
      ),
      description:
        "Displays basic info of a selected country. React communicates with a graphql api written from scratch which makes an api call to a rest api and converts it to the graphql data scheme before sending it to the front-end.   ",
    },
    {
      name: "Let-Us-Faire",
      image: letusfaire,
      Weblink: "https://let-us-faire.herokuapp.com/",
      githublink: "https://github.com/Mount-Blanc/Let-Us-Faire",
      react: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
      ),

      firebase: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
        />
      ),

      bootstrap: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
        />
      ),

      heroku: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
        />
      ),
      node: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />
      ),
      express: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />
      ),
      description:
        "A to do list app with guest sign in with firebase.Simple, for the minimalist. ",
    },
    {
      name: "E-Commerce",
      image: Ecommerce,
      Weblink: "https://fictionalecommerce.herokuapp.com/",
      githublink: "https://github.com/Mount-Blanc/E-commerce",
      react: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
      ),
      node: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />
      ),
      express: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />
      ),
      heroku: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
        />
      ),
      description:
        "A fictional E-commerce website. This was a case study on shopping carts. The data is from a rest api",
    },
    {
      name: "Coming Soon",
    },
  ];

  return (
    <>
      <h1>My Projects</h1>
      <div className="projectContainer ">
        {projects.map((project) => (
          <Card className="project" key={project.name}>
            <div className="cardContainer">
              <div>
                <h3>{project.name}</h3>
                <h5>Technologies</h5>
                {project.react}
                {project.typescript}
                {project.bootstrap}
                {project.graphql}
                {project.node}
                {project.express}
                {project.firebase}
                {project.heroku}
                <h5>Description</h5>
                <p>{project.description}</p>
              </div>
              <div className="imgContainer">
                <img className="img" src={project.image} alt={project.name} />
              </div>
            </div>
            <div>
              <button>
                <a href={project.Weblink}>Visit Site</a>
              </button>
              <button>
                <a href={project.githublink}>View Code</a>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Projects;
