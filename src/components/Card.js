import './Card.css'


const Card =(props) => {
    return(
        <div className='card title '>{props.children}</div>
    )
}
export default Card