import React from 'react'
import logo from '../img/logo.png'
import '../css/navbar.css'

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Special Dishes
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Beef Steak Sauce</a></li>
                  <li><a class="dropdown-item" href="/">Salmon Zucchini</a></li>
                </ul>
              </li>

            </ul>
            <a class="navbar-brand navbar-brand-center d-flex align-items-center only-desktop" href="/">
              <img src={logo} alt="" />
            </a>
            <ul class="navbar-nav d-flex justify-content-between">
              <div class="d-flex flex-lg-row flex-column">
                <li class="nav-item active">
                  <a class="nav-link" href="menu.html">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="team.html">Team</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link" href="/reservation">Reservation</a>
                </li>
              </div>
              <li class="nav-item">
                <a id="side-search-open" class="nav-link" href="/">
                  <span class="lnr lnr-magnifier"></span>
                </a>
              </li>
            </ul>
            <button class=" btn d-flex exit text-center">
              <a class="nav-link" href='../login'>Déconnexion</a>
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar