import Card from "./Card";
import "./Projects.css";
import CountryInfo from "../assets/imgs/CountryInfo.png";
import ReactNow from './REactNow.png'

function Projects() {
  const Reactprojects = [
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
  ];
  const ReactNativeprojects = [
    {
      name: "ReactNow",
      image:ReactNow,
      weblink:"https://mount-blanc.github.io/ReactNow/",
      githublink:"https://github.com/Mount-Blanc/ReactNow",
      react:(
        <img
        className="cardIcon"
         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
      ),
      description:"A Chronograph and Reaction timer. Let's move that body !"
    },
    {
      name:"Grocery",
      image:"",
      weblink:"",
      githublink:""

    }
  ];
  const Vueprojects = [
    {
      name: "MuseumArt",
      image: "",
      weblink: "https://mount-blanc.github.io/ArtFromMetropolitanMuseum/",
      githublink: "https://github.com/Mount-Blanc/ArtFromMetropolitanMuseum",
      vue: (
        <img
          className="cardIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
        ></img>
      ),
      description:"Collects data about art pieces from museums. Provides an easier way to study art."
    },
  ];

  return (
    <>
      <h1>My Projects</h1>
      <h2>React Projects</h2>
      <div className="projectContainer ">
        {Reactprojects.map((project) => (
          <Card className="project"  key={project.name}>
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
            
                <a className="projectlinks linkcontainer" target="_blank" href={project.Weblink}>Visit Site</a>
              
            
                <a className="projectlinks linkcontainer" target="_blank" href={project.githublink}>View Code</a>
              
            </div>
          </Card>
        ))}
        <h2>Vue Projects</h2>
        {Vueprojects.map((project) => (
          <Card className="project" key={project.name}>
            <div className="cardContainer">
              <div>
                <h3>{project.name}</h3>
                <h5>Technologies</h5>
                {project.vue}
                <h5>Description</h5>
                <p>{project.description}</p>
              </div>
              <div className="imgContainer">
                <img className="img" src={project.image} alt={project.name} />
              </div>
            </div>
            <div>
            
                <a className="projectlinks linkcontainer" target="_blank" href={project.weblink}>Visit Site</a>
              
            
                <a className="projectlinks linkcontainer" target="_blank" href={project.githublink}>View Code</a>
              
            </div>
          </Card>
        ))}
        <h2>React Native Projects</h2>
        {ReactNativeprojects.map((project) => (
          <Card className="project" key={project.name}>
            <div className="cardContainer">
              <div>
                <h3>{project.name}</h3>
                <h5>Technologies</h5>
                {project.react}
                <h5>Description</h5>
                <p>{project.description}</p>
              </div>
              <div className="imgContainer">
                <img className="img" src={project.image} alt={"Coming Soon"} />
              </div>
            </div>
            <div>
            
                <a className="projectlinks linkcontainer" target="_blank" href={project.weblink}>Visit Site</a>
              
            
                <a className="projectlinks linkcontainer" target="_blank" href={project.githublink}>View Code</a>
              
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Projects;
