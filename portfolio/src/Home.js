import './Home.css'
function Home () {
    return(
        <div className='space'>
            <h3>*score advance table*</h3>
            <div class="space">
    <span>Classic</span>
    <br />
    <div class="space-invader space-invader-1 classic"></div>
    <div class="space-invader space-invader-2 classic"></div>
    <div class="space-invader space-invader-3 classic"></div>
  </div>
            <ul>
                <li>
                  <div className='space-invader space-invader-1 classic'></div> = <a href=''>about </a>
                 = <a href=''>projects </a>
                  = <a href=''>contact </a>
                </li>
            </ul>
        </div>
    )
}
export default Home