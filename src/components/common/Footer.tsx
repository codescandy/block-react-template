import { useState, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs';
import logoIcon from '../../assets/images/logo/logo.svg';
import footerLinks from '../../data/footerLinks.json';

const Footer = () => {
  const [collapse, setCollapse] = useState<Record<string, boolean>>({});

  // initialize all collapse states open on desktop, closed on mobile
  useEffect(() => {
    const isDesktop = window.innerWidth >= 992;
    const initialCollapse: Record<string, boolean> = {};
    footerLinks.forEach((section) => {
      initialCollapse[section.key] = isDesktop;
    });
    setCollapse(initialCollapse);
  }, []);

  const toggleCollapse = (key: string) => {
    setCollapse((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer className="pt-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12">
            <div className="row" id="ft-links">
              {footerLinks.map((section) => (
                <div key={section.key} className="col-lg-3 col-12 mb-4">
                  <div className="position-relative">
                    <div className="d-flex justify-content-between border-bottom border-bottom-lg-0 pb-2 mb-0 mb-lg-4">
                      <h4>{section.title}</h4>
                      <button className="d-lg-none btn p-0 border-0" onClick={() => toggleCollapse(section.key)}>
                        {collapse[section.key] ? <BiChevronUp /> : <BiChevronDown />}
                      </button>
                    </div>
                    <Collapse in={collapse[section.key]}>
                      <div>
                        <ul className="list-unstyled py-3 py-lg-0 mb-0">
                          {section.links.map((linkText, idx) => (
                            <li key={idx} className="mb-2">
                              <a href="#!" className="text-reset text-decoration-none">
                                {linkText}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-12">
            <div>
              <h4 className="mb-4">Headquarters</h4>
              <p className="text-body-secondary">Codescandy, 412, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India 560025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-7 pt-lg-7 pb-4">
        <div className="row align-items-center">
          <div className="col-md-3 mb-3 mb-md-0">
            <a href="../index.html">
              <img src={logoIcon} alt="Logo" />
            </a>
          </div>
          <div className="col-md-6 text-center small">
            &copy; 2025 <span className="text-primary">Block Bootstrap 5 Theme</span> | Designed by <span className="text-primary">CodesCandy</span>
          </div>
          <div className="col-md-3 d-flex justify-content-end gap-1">
            <a href="#!" className="btn btn-light btn-icon rounded-circle p-2">
              <BsInstagram />
            </a>
            <a href="#!" className="btn btn-light btn-icon rounded-circle p-2">
              <BsFacebook />
            </a>
            <a href="#!" className="btn btn-light btn-icon rounded-circle p-2">
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
