import './Home.css'
import Skills from './Skills'
import Projects from './Projects'
import {useState,useEffect} from 'react'
import Animation from './Animation'
import Footer from './Footer'

function Home () {



    return(
        <div   >
          <h1>About Me</h1>
            <p>I'm a self-taught programmer and love to build things with emerging web technologies. Although I'm aiming for a front-end position I also study the backend so 
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

        <Skills  />
        <Projects/>
        <Footer/>
        </div>
    )
}
export default Home