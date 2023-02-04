function Projects () {
    const projects = [
            {
              name: 'Project 1',
              image: 'project1.jpg',
              link: 'https://github.com/user/project1'
            },
            {
              name: 'Project 2',
              image: 'project2.jpg',
              link: 'https://github.com/user/project2'
            },
            // Add more projects here
          ];
       
          return (
            <div className="my-projects">
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