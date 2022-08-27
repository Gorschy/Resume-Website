import './Navbar.css'

const Navbar = () => {

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#" className='nav-link'>Education</a>
                    </li>
                    <li>
                        <a href="#" className='nav-link'>Skills</a>
                    </li>
                    <li>
                        <a href="#" className='nav-link'>Experiences</a>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Navbar