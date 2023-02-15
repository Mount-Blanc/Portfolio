import Card from './Card'
import './Projects.css'
import CountryInfo from '../assets/imgs/CountryInfo.png'
import Ecommerce from '../assets/imgs/E-commerce.png'
import letusfaire from '../assets/imgs/letusfaire.png'


function Projects () {
    const projects = [
            {
              name: 'CountryInfo',
              image: CountryInfo,
              Weblink: 'https://countryinfo.herokuapp.com/',
              githublink: 'https://github.com/Mount-Blanc/CountryInfo'
            },
            {
              name: 'Let-Us-Faire',
              image: letusfaire,
              Weblink: 'https://let-us-faire.herokuapp.com/',
              githublink: 'https://github.com/Mount-Blanc/Let-Us-Faire' 
            },
            {
                name: 'E-Commerce',
                image: Ecommerce,
                Weblink: 'https://fictionalecommerce.herokuapp.com/',
                githublink: 'https://github.com/Mount-Blanc/E-commerce'
               },
              {
                name: 'Coming Soon',
              },
          ];
       
          return (            
            <>
              <h1>My Projects</h1>
            <div className="projectContainer">
              {projects.map((project) => (
                <Card className="project" key={project.name}>
                  <h3>{project.name}</h3>
                  <a href={project.link}>
                    <img className='img' src={project.image} alt={project.name} />
                  </a>
                  <div>
                    <button><a href={project.Weblink} >Visit Site</a></button>
                    <button><a href={project.githublink} >View Code</a></button>
                  </div>
                </Card>
              ))}
            </div>
            </>
          );
        };
        
export default Projects