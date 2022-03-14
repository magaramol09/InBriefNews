import React from 'react'
import { Link } from "react-router-dom";

export default function Footer(Props) {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{color:!Props.mode}}> 
      <div className=" my-5">
        <footer
          className={`text-center text-lg-start text-${!Props.mode}`}

        >
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor : Props.mode === 'dark' ? 'black' : '#664EF7' }}
          >
            <div className='m-auto'>
              <a href="https://www.facebook.com/login/" target="_blank" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target="_blank" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <Link to="/" className="text-white me-4">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="/" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </Link>
              <a href="https://www.linkedin.com/login" target="_blank" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          {/* <!-- Section: Social media --> */}
          <section  >
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold"  style={{color:Props.mode==='dark'?'white':"black"}}>INBRIEF</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    doloremque totam repellendus quod perferendis accusamus  nemo eum quis aut quod voluptatibus officiis ducimus obcaecati ab doloremque culpa earum! Est perspiciatis, ipsum incidunt inventore natus cum doloremque. Eius quisquam dicta eaque quaerat officiis odit ex cum commodi? Temporibus quod libero atque aperiam omnis ipsa, suscipit consequatur enim voluptas maxime, facere error asperiores eum amet.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold"  style={{color:Props.mode==='dark'?'white':"black"}}>TOP HEADLINE</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff'  , height: '2px' }}
                  />
                  <p>
                    <Link to="/Fashion" onClick={scrollToTop}  className={`text-${!Props.mode}`}>Fashion</Link>
                  </p>
                  <p>
                    <Link to="/Business" onClick={scrollToTop} className={` text-${!Props.mode}`}>Business</Link>
                  </p>
                  <p>
                    <Link to="/Market" onClick={scrollToTop} className={` text-${!Props.mode}`}>Market</Link>
                  </p>
                  <p>
                    <Link to="/Education" onClick={scrollToTop} className={`text-${!Props.mode}`}>Education</Link>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold"  style={{color:Props.mode==='dark'?'white':"black"}}>Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p><i className="fas fa-home mr-3"></i> SAMBHAJI COLONY, N6 431001, AURANGABAD</p>
                  <p><i className="fas fa-envelope mr-3"></i> magaramol09@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i> +91 97309899996</p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ color : Props.mode === 'dark' ? 'white' : 'black' }}>  
              © 2022 COPYRIGHTS: 
            <Link className={` text-${!Props.mode}`} to="/"
            > AMOL MAGAR </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
