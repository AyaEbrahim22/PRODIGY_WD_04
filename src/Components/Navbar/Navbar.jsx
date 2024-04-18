import React from 'react'
import style from './Navbar.module.css'


export default function Navbar() {
  
  window.addEventListener('scroll', function(){
    if( window.scrollY > 150){
      document.getElementById('navId').style.height = '56px'
     }else{
      document.getElementById('navId').style.height = '75px'
     }
  })
  
  return <>
  <nav id='navId' className={`${style.navStyle} navbar navbar-expand-lg`}>
  <div className="container navBackGround">
    <a className="navbar-brand text-light" href="#home">A<span className={style.YColor}>Y</span>A</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
      
        <li className="nav-item">
          <a className="nav-link text-light" href="#home">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light" href="#about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light" href="#edu">Education</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light" href="#project">Projects</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light" href="#contact">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  </>
}
