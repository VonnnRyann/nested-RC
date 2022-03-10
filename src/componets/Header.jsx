import React from "react";
import logo from '../assets/logo.png'



const Header = () => {
    return (
        <header>
            {/* <img src={require('../assets/logo.png')} alt="logo" /> */}
            <img src={logo} alt="logo" />
        </header>
    )
}


export default Header;