

const Header = () => {
    

    return ( 
        <div className="header-wrapper">
                <div className="shape"></div>
                <div className="shape"></div>
                <h1>Web<span>Color</span><span>Palettes</span></h1>
                <ul className="navbar">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About</li>
                    
                </ul>
                <button>Button</button>
                <div className="hamburger-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                
        </div>
    )
}

export default Header