import Card from './Card'
import CountryInfo from '../assets/imgs/CountryInfo.png'
import Ecommerce from '../assets/imgs/E-commerce.png'
import letusfaire from '../assets/imgs/letusfaire.png'


function Projects () {
    const projects = [
            {
              name: 'CountryInfo',
              image: CountryInfo,
              link: 'https://github.com/Mount-Blanc/CountryInfo'
            },
            {
              name: 'Let-Us-Faire',
              image: Ecommerce,
              link: 'https://github.com/Mount-Blanc/Let-Us-Faire'
            },
            {
                name: 'E-Commerce',
                image: letusfaire,
                link: 'https://github.com/Mount-Blanc/E-commerce'
              },
              {
                name: 'Project 4',
                image: 'project2.jpg',
                link: 'https://github.com/user/project2'
              },
          ];
       
          return (
            <div className="my-projects">
              <h1>My Projects</h1>
              {projects.map((project) => (
                <Card className="project" key={project.name}>
                  <h3>{project.name}</h3>
                  <a href={project.link}>
                    <img src={project.image} alt={project.name} />
                  </a>
                </Card>
              ))}
            </div>
          );
        };
        
export default Projects