function Projects () {
    const projects = [
            {
              name: 'CountryInfo',
              image: 'project1.jpg',
              link: 'https://github.com/Mount-Blanc/CountryInfo'
            },
            {
              name: 'Let-Us-Faire',
              image: 'project2.jpg',
              link: 'https://github.com/Mount-Blanc/Let-Us-Faire'
            },
            {
                name: 'E-Commerce',
                image: 'project2.jpg',
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
                <div className="project" key={project.name}>
                  <h3>{project.name}</h3>
                  <a href={project.link}>
                    <img src={project.image} alt={project.name} />
                  </a>
                </div>
              ))}
            </div>
          );
        };
        
export default Projects