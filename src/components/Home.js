import './Home.css'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import Cloud from './Cloud/Cloud'
import Cloud2 from './Cloud/Cloud2'
import Cloud3 from './Cloud/Cloud3'

function Home () {



    return(
        <div className='background'   >
            <Cloud/>
          <h1>About Me</h1>
            <p>I'm a self-taught programmer and love to build things with emerging web technologies. Although I'm aiming for a front-end position I also study the backend so 
                I can have a complete understanding of the whole picture.
                When I am not studying programming I like to study videogame UI's,read books, and watch movies. I'm proud of my small but growing collection of movie DVD's</p>
            
           
        <Cloud2/>
        <Skills  />
        <Cloud3/>
        <Projects/>
        <Footer/>
        </div>
    )
}
export default Home