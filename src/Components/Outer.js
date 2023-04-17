import React, { useState, useRef } from "react";
import { Button, Container, Offcanvas } from 'react-bootstrap';
import './Outer.css'; // Import custom CSS for offcanvas styles
import logo from '../Images/CellworksLogo.png'
import carouselImg from '../Images/im4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faPhone, faCircleInfo, faQuestion, faWrench, } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; // Import Carousel component from the package
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [show, setShow] = useState(false);

  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light mx-auto px-2 px-md-5">
        <button className="navbar-toggler" type="button" onClick={showSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand text-center mx-auto" href="#"><img src={logo}></img></a>

        <div className="collapse navbar-collapse d-flex justify-content-between d-none d-md-flex" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"> Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Need help?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" style={{ backgroundColor: '#CA4F11' }} href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
      <Container className='p-4 d-none d-md-flex'>
        <Offcanvas show={show} onHide={closeSidebar} className="custom-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title> <a className="navbar-brand" href="#"><img src={logo}></img></a></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h4 className="pt-3 sidemenu-list">  <span className="sidemenu-icons"><FontAwesomeIcon icon={faSearch} /></span><span className="side-navigation">Technology</span> </h4>
            <h4 className="pt-3 sidemenu-list">  <span className="sidemenu-icons"><FontAwesomeIcon icon={faWrench} /></span><span className="side-navigation">Services</span></h4>
            <h4 className="pt-3 sidemenu-list">  <span className="sidemenu-icons"><FontAwesomeIcon icon={faCircleInfo} /></span> <span className="side-navigation">About us</span></h4>
          </Offcanvas.Body>
          <Offcanvas.Body>

          </Offcanvas.Body>
          <Offcanvas.Body>

          </Offcanvas.Body>
          <Offcanvas.Body>
            <h4 className="pt-3 sidemenu-list" > <span className="sidemenu-icons"><FontAwesomeIcon icon={faPhone} /></span><span className="side-navigation">Contact us</span></h4>
            <h4 className="pt-3 sidemenu-list"> <span className="sidemenu-icons"> <FontAwesomeIcon icon={faQuestion} /></span><span className="side-navigation">Help</span></h4>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <div className="px-md-5">
        <div className="row">
          <div className="col-md-6 mx-auto col-12 d-none d-sm-block carousel-elements">
            {/* Title */}
            {/* Navigation buttons */}
            <div className="main-card-carousel d-flex justify-content-center align-items-center" >
              <div className="card pt-5 cards-backgroud-color" style={{ border: 'none' }}>
                <div className="card-content">
                  <div className="card-body carousel-card-body">
                    <div className="carousel-nav d-flex justify-content-center ">
                      <div className="carousel-heads d-flex justify-content-between" style={{ maxWidth: "400px" }}>
                        <button className="carousel-nav-btn carousel-nav-btn-prev mr-2" >
                          <FontAwesomeIcon icon={faChevronLeft} /> {/* Replace with left icon */}
                        </button>
                        <h1 className="carousel-title ">Simple, fast, and efficient</h1>
                        <button className="carousel-nav-btn-next control-arrow control-next" >
                          <FontAwesomeIcon icon={faChevronRight} /> {/* Replace with right icon */}
                        </button>
                      </div>
                    </div>

                    {/* Carousel */}
                    <Carousel className="mt-5 px-5"
                      showArrows={true}
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop
                      autoPlay
                      stopOnHover
                      interval={3000}
                    >
                      <div>
                        <img src={carouselImg} alt="Image 1" />
                        {/* <p className="legend">Image 1</p> Add caption or legend for the image */}
                      </div>
                      <div>
                        <img src={carouselImg} alt="Image 2" />
                        {/* <p className="legend">Image 2</p> Add caption or legend for the image */}
                      </div>
                      <div>
                        <img src={carouselImg} alt="Image 3" />
                        {/* <p className="legend">Image 3</p> Add caption or legend for the image */}
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6"> */}
          <div className="card col-md-6 col-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="d-flex justify-content-center">
              <div className="card-body mt-sm-0 mt-md-5" style={{ maxWidth: '400px' }}>
                <h2 className="card-title text-center mt-5 d-flex">Hey, Welcome back</h2>
                <p className="card-text text-center mb-4 d-flex">Enter the information you entered while registering</p>
                <form className="mt-5">
                  <div className="form-group">
                    <label htmlFor="email" className="text-left d-flex" style={{ fontSize: '14px', fontWeight: 500 }}>Email address</label>
                    <div className="input-group mt-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                      </div>
                      <input type="email" className="form-control" id="email" name="email" required placeholder="Enter email address" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-left d-flex mt-4" style={{ fontSize: '14px', fontWeight: 500 }}>Password</label>
                    <div className="input-group mt-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                      </div>
                      <input type="password" className="form-control" id="password" name="password" required placeholder="Enter password" />
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-between align-items-center mt-3">
                    {/* <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="keep-signedin" name="keep-signedin" />
                      <label className="form-check-label" htmlFor="keep-signedin">Keep me signed in</label>
                    </div> */}
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" />
                      <label className="form-check-label" htmlFor="mySwitch">Keep me signed in</label>
                    </div>
                    <a href="#" className="" style={{ color: '#CA4F11' }}>Forgot password?</a>
                  </div>

                </form>
                <div className="text-center mt-3" style={{ paddingTop: '130px' }}>
                  <p className="mb-0">Do not have an account? <a href="#" className="" style={{ color: '#CA4F11' }}>Sign-up here!</a></p>
                </div>

              </div>
            </div>
            <div className="card-footer text-center" style={{ lineHeight: '60px', backgroundColor: '#F9F9F9' }}>
              <button type="submit" className="btn btn-primary btn-block" style={{ lineHeight: '30px', width: '360px', backgroundColor: '#D5D5D5', border: 'none' }}>Login</button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

    </>
  );
};

export default App;
