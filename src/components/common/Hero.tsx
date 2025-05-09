import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
const ArrowIcon: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = '#8B3DFF' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size + 1} viewBox="0 0 16 17" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8.89181C1 8.7592 1.05268 8.63202 1.14645 8.53825C1.24021 8.44448 1.36739 8.39181 1.5 8.39181H13.293L10.146 5.24581C10.0521 5.15192 9.99937 5.02458 9.99937 4.89181C9.99937 4.75903 10.0521 4.63169 10.146 4.53781C10.2399 4.44392 10.3672 4.39117 10.5 4.39117C10.6328 4.39117 10.7601 4.44392 10.854 4.53781L14.854 8.53781C14.9006 8.58425 14.9375 8.63943 14.9627 8.70017C14.9879 8.76092 15.0009 8.82604 15.0009 8.89181C15.0009 8.95757 14.9879 9.02269 14.9627 9.08344C14.9375 9.14418 14.9006 9.19936 14.854 9.24581L10.854 13.2458C10.7601 13.3397 10.6328 13.3924 10.5 13.3924C10.3672 13.3924 10.2399 13.3397 10.146 13.2458C10.0521 13.1519 9.99937 13.0246 9.99937 12.8918C9.99937 12.759 10.0521 12.6317 10.146 12.5378L13.293 9.39181H1.5C1.36739 9.39181 1.24021 9.33913 1.14645 9.24536C1.05268 9.15159 1 9.02441 1 8.89181Z"
        fill={color}
      />
    </svg>
  );
  
  const ExploreIcon: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
  
  

const Hero: React.FC = () => {
  return (
    <section className="py-lg-8 py-5">
        <Container>
      <Row className="justify-content-center">
        <Col xl={9} lg={10} xs={12}>
          <div className="text-center d-flex flex-column gap-5">
            {/* Badge */}
            <div className="d-flex justify-content-center">
              <span className="bg-primary bg-opacity-10 text-primary border-primary border p-2 fs-6 rounded-pill lh-1 d-flex align-items-center">
                <span className="badge bg-primary">New</span>
                <span className="ms-2">Introducing AI Editor</span>
                <span className="ms-1">
                  <ArrowIcon />
                </span>
              </span>
            </div>

            {/* Title and Description */}
            <div className="d-flex flex-column gap-3 mx-lg-8">
              <h1 className="mb-0 display-4">Build better products with customer feedback</h1>
              <p className="mb-0 lead">
                Track, manage, engage, and analyse your customer feedback to make product decisions with ease.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-row gap-4 justify-content-center">
              <Button href="#" variant="primary">
                Get Started
              </Button>
              <a href="#" className="icon-link icon-link-hover d-inline-flex align-items-center gap-1">
                <span>Explore products</span>
                <ExploreIcon />
              </a>
            </div>
          </div>
          
        </Col>
      </Row>
      </Container>
    </section>
  );
};

export default Hero;
