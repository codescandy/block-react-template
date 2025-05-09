import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import featureImg from '../../assets/images/landings/sass-v3/feature-1.png';
import featureImg1 from '../../assets/images/landings/sass-v3/feature-2.png';
import featureImg2 from '../../assets/images/landings/sass-v3/feature-3.png';
const ArrowIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = '#8b3dff' }) => (
 
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
  </svg>
  );

  const LightningCharge: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = '#8b3dff' }) => (
 
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color}  viewBox="0 0 16 16">
    <path  fillRule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
  </svg>
  );

  const LightningChargeSecond: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#ffc107' }) => (
 
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color}  viewBox="0 0 16 16">
    <path  fillRule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
  </svg>
  );
  const Layers: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#0dcaf0' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color}  viewBox="0 0 16 16">

  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/>
  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"/>
</svg>

);
const Features = () => {
  return (
    <section className="py-lg-8 py-5" >
      <Container>
        {/* Heading */}
        <Row className="justify-content-center mb-8">
          <Col xl={6} lg={10} xs={12}>
            <div className="text-center d-flex flex-column gap-5">
              <div className="d-flex justify-content-center">
                <span className="bg-primary bg-opacity-10 text-primary border-primary border px-3 py-2 fs-6 rounded-pill lh-1 align-items-center d-flex">
                  {/* Features SVG Icon */}
                  <LightningCharge/>
                  <span className="ms-1 text-uppercase ls-md fw-semibold">Features</span>
                </span>
              </div>
              <div className="d-flex flex-column gap-3 mx-lg-8">
                <h1 className="mb-0">The features to boost your productivity</h1>
                <p className="mb-0">
                  Say hello to the Store. A home for Extensions published by our community of Developers using our API.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Feature Block */}
        <Row className="g-6 mb-6">
          <Col xs={12} >
            <div className="border rounded-3 bg-white bg-opacity-25 overflow-hidden">
              <div className="pattern-square"></div>
              <Row className="align-items-center">
                <Col lg={6} xs={12} >
                  <div className="p-lg-8 p-5 my-lg-4 d-flex flex-column gap-4">
                    <div className="icon-shape icon-xl bg-primary bg-opacity-10 rounded-3 border border-primary">
                    <ArrowIcon/>
                      
                    </div>
                    <div>
                      <h3>One up your productivity</h3>
                      <p className="mb-0 text-body">
                        On top of the core Block Extensions already built in, you can install Extensions built by Developers from the community. Everything you’ve asked for, in one place.
                      </p>
                    </div>
                    <div>
                      <Button variant="primary">Browse Extensions</Button>
                    </div>
                  </div>
                </Col>

                {/* Image */}
                <Col lg={6} xs={12} className="d-lg-flex justify-content-center" >
                  <figure className="p-3 p-lg-0">
                    <img src={featureImg} alt="Feature" className="img-fluid" />
                  </figure>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="g-6">
          <Col lg={6} xs={12} >
            <div className="border rounded-3 bg-white bg-opacity-25 overflow-hidden">
              <div className="pattern-square"></div>
              <Row className="align-items-center">
                <Col xs={12} >
                  <div className="p-lg-8 p-5 my-lg-4 d-flex flex-column gap-4">
                    <div className="icon-shape icon-xl bg-warning bg-opacity-10 rounded-3 border border-warning">
                    <LightningChargeSecond/>
                      
                    </div>
                    <div>
                      <h3>Automate your task</h3>
                      <p className="mb-0 text-body">
                      Designed to be seamless and instant. View an Extension and hit to simply install it in milliseconds.
                      </p>
                    </div>
                    <figure className="p-3 p-lg-0">
                    <img src={featureImg1} alt="Feature" className="img-fluid" />
                  </figure>
                    
                  </div>
                </Col>

              
              </Row>
            </div>
          </Col>
          <Col lg={6} xs={12} >
            <div className="border rounded-3 bg-white bg-opacity-25 overflow-hidden">
              <div className="pattern-square"></div>
              <Row className="align-items-center">
                <Col xs={12} >
                  <div className="p-lg-8 p-5 my-lg-4 d-flex flex-column gap-4">
                    <div className="icon-shape icon-xl bg-info bg-opacity-10 rounded-3 border border-info">
                    <Layers/>
                      
                    </div>
                    <div>
                      <h3>An ever-growing collection</h3>
                      <p className="mb-0 text-body">
                      We offer seamless integration solutions that empower your business with enhanced efficiency and productivity.
                      </p>
                    </div>
                    <figure className="p-3 p-lg-0">
                    <img src={featureImg2} alt="Feature" className="img-fluid" />
                  </figure>
                    
                  </div>
                </Col>

              
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
