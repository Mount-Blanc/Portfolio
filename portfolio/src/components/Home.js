import './Home.css'

import Skills from './Skills'
import Projects from './Projects'
import {useState,useEffect} from 'react'
function Home () {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
      

      const styles = {
        background: `linear-gradient(to bottom, 
          rgba(0,0,0, ${scrollPosition / 1000}), 
          rgba(0, 0, 255, ${scrollPosition / 1000}))`
      };


    return(
        <div style={styles} >
            <p>I'm passionate about building things with emerging web technologies. Although I'm aiming for a front-end position I also study the backend so 
                I can have a complete understanding of the whole picture.
                When I am not studying programming I like to study videogame UI's,read books, and watch movies. I'm proud of my small but growing collection of movie DVD's</p>
            <h3>*score advance table*</h3>
   
            <ul>
                <li>
                  <span className='space-invader space-invader-3 classic'></span>=<a href=''>skills </a>
                </li>
                <li>
                <span className='space-invader space-invader-1 classic'></span>=<a href=''>projects </a>
                </li>
                <li>
                <span className='space-invader space-invader-2 classic'></span>=<a href=''>contact </a>
                </li>
            </ul>

        <Skills className='skills' />
        <Projects/>
        </div>
    )
}
export default Home