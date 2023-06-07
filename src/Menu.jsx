import './global.css'
import './Menu.css'

function Menu() {
    return ( <div className="menu">
    <div className="left_menu">
        <img className='logo' src={require("./assets_menu/Group 6.png")} alt="" />
    </div>
    <div className="right_menu">
        <a href="/" className="link_menu">HOME</a>
        <a href="/" className="link_menu">ABOUT US</a>
        <a href="/" className="link_menu">SIGNUP</a>
        <a href="/" className="link_menu">CONTACT US</a>
    </div>
  </div>
    );
}

export default Menu;