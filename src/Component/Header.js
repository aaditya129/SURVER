import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary " data-bs-theme="dark"  >
  <div class="container-fluid " style={{marginLeft:"90px"}}>
    <a class="navbar-brand" style={{fontSize:"42px",fontWeight:"700"}} href="/">NETRA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"70px"}}>
      <ul class="navbar-nav me-auto mb-3 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{fontSize:"23px",margin:"0px 11px"}} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{fontSize:"23px",margin:"0px 11px"}} href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a style={{fontSize:"23px",margin:"0px 11px"}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/action">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
     
      <ul class="navbar-nav me-auto mb-3 mb-lg-0">
      <li class="nav-item" style={{marginLeft:"240px"}}>
          <a class="nav-link" style={{fontSize:"23px"}} href="/about">Contact Us</a>
        </li>
      
        <li class="nav-item dropdown" style={{fontSize:"23px",display:"flex",alignItems:"center"}}>
          <a style={{fontSize:"23px",display:"flex",alignItems:"center"}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <LiveTvIcon/>  LIVE DEMO
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/demo">DEMO 1</a></li>
            <li><a class="dropdown-item" href="/demo2">DEMO 2</a></li>
            <li><a class="dropdown-item" href="/demo3">DEMO 3</a></li>
          </ul>
        </li>
      <li class="nav-item" style={{marginLeft:"11px"}}>
          <a class="nav-link" style={{fontSize:"23px"}} href="/about">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
