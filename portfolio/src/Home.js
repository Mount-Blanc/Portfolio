import spaceinvader from './space-invader.svg'
import './Home.css'
function Home () {
    return(
        <div>
            <h2>My Name is Wilson ramos and i am an aspiring front-end web developer</h2>
            <h3>*score advance table*</h3>
            <ul>
                <li>
                  <img src={spaceinvader}/> = <a href=''>about </a>
                  <img src={spaceinvader}/>= <a href=''>projects </a>
                  <img src={spaceinvader}/> = <a href=''>contact </a>
                </li>
            </ul>
        </div>
    )
}
export default Home