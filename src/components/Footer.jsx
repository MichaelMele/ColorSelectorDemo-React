import { FaGithub } from "react-icons/fa";

const Footer = () => {


    return (
        <div className="footer-wrapper">
            <div style={{display:"flex", gap:"1em"}}>
                <div class="shape"></div>
                <div class="shape"></div>
                <h1>Web<span>Color</span><span>Palettes</span></h1>
            </div>
            <ul class="navbar">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div className="credit">
                <h4>Designed by <span>Michael Mele</span></h4>
                <a href="https://github.com/MichaelMele" target="_blank"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Footer