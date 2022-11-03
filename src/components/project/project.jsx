import './project.css'

function Project({ imgSrc, title, about}) {
    return(
        <div className='card'>
            <h2 className='title'></h2>
            <p className='about'></p>
            <img src={imgSrc}></img>
        </div>
    );
}

export default Project;