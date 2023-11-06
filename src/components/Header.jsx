import React from 'react';
import '../css/header.css';
const Header = () => {
  return (
    <header className="header full-box">
	    <div className="header-options full-box">
	        <nav className="header-navbar full-box poppins-regular font-weight-bold" >
            <ul className="list-unstyled full-box">
                <li><a href="index.html" >Inicio<span className="full-box" ></span></a></li>
                <li><a href="nosotros.html" >Sobre Nosotros<span className="full-box" ></span></a></li>
					      <li><a href="menu.html" >Menu<span className="full-box" ></span></a></li>
					      <li><a href="login.html" >Login<span className="full-box" ></span></a> </li>
            </ul>
          </nav>
		  </div>
    </header>

  );
};

export default Header;