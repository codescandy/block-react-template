import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";
import logoIcon from "../../assets/images/logo/logo.svg";

const Footer = () => {
  const [collapse, setCollapse] = useState({
    service: true,
    about: true,
    tech: true,
    locations: true,
  });

  const toggleCollapse = (key: string) => {
    setCollapse((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <footer className="pt-7">
      <div className="container">
        {/* Footer 4 column */}
        <div className="row">
          <div className="col-lg-9 col-12">
            <div className="row" id="ft-links">
              {/* Service */}
              <div className="col-lg-3 col-12 mb-4">
                <div className="position-relative">
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-0 mb-lg-4">
                    <h4>Service</h4>
                    <button className="d-lg-none btn p-0 border-0" onClick={() => toggleCollapse("service")}>
                      {collapse.service ? <BiChevronUp /> : <BiChevronDown />}
                    </button>
                  </div>
                  <Collapse in={collapse.service}>
                    <div>
                      <ul className="list-unstyled py-3 py-lg-0 mb-0">
                        <li className="mb-2"><a href="./index.html" className="text-reset text-decoration-none">Web App Development</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Front End Development</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">MVP Development</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Digital Marketing</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Content Writing</a></li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* About */}
              
              <div className="col-lg-3 col-12 mb-4">
                <div className="position-relative">
                 <div className="d-flex justify-content-between border-bottom pb-2 mb-0 mb-lg-4">
                    <h4>About us</h4>
                    
                    <button className="d-lg-none btn p-0 border-0" onClick={() => toggleCollapse("about")}>
                      {collapse.about ? <BiChevronUp /> : <BiChevronDown />}
                    </button>
                  </div>
                  <Collapse in={collapse.about}>
                  
                    <div>
                      <ul className="list-unstyled py-3 py-lg-0 mb-0">
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Case Studies</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Blog</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Services</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">About</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Career</a></li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Technology */}
              <div className="col-lg-3 col-12 mb-4">
                <div className="position-relative">
                 <div className="d-flex justify-content-between border-bottom pb-2 mb-0 mb-lg-4">
                    <h4>Technology</h4>
                    <button className="d-lg-none btn p-0 border-0" onClick={() => toggleCollapse("tech")}>
                      {collapse.tech ? <BiChevronUp /> : <BiChevronDown />}
                    </button>
                  </div>
                  <Collapse in={collapse.tech}>
                    <div>
                      <ul className="list-unstyled py-3 py-lg-0 mb-0">
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Next.js</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Sanity</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Contentful</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Vercel</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Netlify</a></li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Locations */}
              <div className="col-lg-3 col-12 mb-4">
                <div className="position-relative">
                 <div className="d-flex justify-content-between border-bottom pb-2 mb-0 mb-lg-4">
                    <h4>Locations</h4>
                    <button className="d-lg-none btn p-0 border-0" onClick={() => toggleCollapse("locations")}>
                      {collapse.locations ? <BiChevronUp /> : <BiChevronDown />}
                    </button>
                  </div>
                  <Collapse in={collapse.locations}>
                    <div>
                      <ul className="list-unstyled py-3 py-lg-0 mb-0">
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">India</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Australia</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Brazil</a></li>
                        <li className="mb-2"><a href="#!" className="text-reset text-decoration-none">Canada</a></li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>

          {/* Headquarters */}
          <div className="col-lg-3 col-12">
            <div>
              <h4 className="mb-4">Headquarters</h4>
              <p className="text-body-secondary">
                Codescandy, 412, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India 560025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mt-7 pt-lg-7 pb-4">
        <div className="row align-items-center">
          <div className="col-md-3 mb-3 mb-md-0">
            <a href="../index.html">
              <img src={logoIcon} alt="Logo" />
            </a>
          </div>
          <div className="col-md-6 text-center small">
            &copy; 2024 <span className="text-primary">Block Bootstrap 5 Theme</span> | Designed by <span className="text-primary">CodesCandy</span>
          </div>
          <div className="col-md-3 d-flex justify-content-end gap-1">
           

            {/* Instagram Icon */}
            <a href="#!" className="btn btn-light btn-icon rounded-circle p-2">
              <BsInstagram />
             
            </a>
                <a href="#!" className="btn btn-light btn-icon rounded-circle p-2">
             <BsFacebook />
             </a>
             <a href="#!" className="btn btn-light btn-icon rounded-circle p-2"> <BsTwitterX /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
