import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import ctaimg from '../../assets/images/landings/sass-v3/cta-img.svg';

const CTA = () => {
  return (
    <section className=" mb-lg-8 py-lg-8 py-5" >
        <Container>
      <Row className="g-0">
        <Col xs={12}>
          <div className="bg-gray-900 rounded-3">
            <Row className="align-items-center">
              <Col xl={{ span: 4, offset: 1 }} lg={12}>
                <div className="d-flex flex-column gap-4 p-6 p-xl-0">
                  <div>
                    <h2 className="text-white-stable">
                      Try our powerful work management tools
                    </h2>
                    <p className="mb-0 me-lg-8">
                      Sign up for a free two-week trial of Block today — no
                      credit card required.
                    </p>
                  </div>
                  <div>
                    <Button variant="primary">Get Started for free</Button>
                  </div>
                  <div>
                    <ListGroup horizontal className="list-inline">
                      <ListGroup.Item className="border-0 bg-transparent p-0 me-3">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M16 8.61426C16 10.736 15.1571 12.7708 13.6569 14.2711C12.1566 15.7714 10.1217 16.6143 8 16.6143C5.87827 16.6143 3.84344 15.7714 2.34315 14.2711C0.842855 12.7708 0 10.736 0 8.61426C0 6.49253 0.842855 4.45769 2.34315 2.9574C3.84344 1.45711 5.87827 0.614258 8 0.614258C10.1217 0.614258 12.1566 1.45711 13.6569 2.9574C15.1571 4.45769 16 6.49253 16 8.61426ZM12.03 5.58426C11.9586 5.51308 11.8735 5.45703 11.7799 5.41947C11.6863 5.38192 11.5861 5.36362 11.4853 5.36567C11.3845 5.36772 11.2851 5.39009 11.1932 5.43143C11.1012 5.47276 11.0185 5.53223 10.95 5.60626L7.477 10.0313L5.384 7.93726C5.24183 7.80478 5.05378 7.73266 4.85948 7.73608C4.66518 7.73951 4.47979 7.81822 4.34238 7.95564C4.20497 8.09305 4.12625 8.27843 4.12283 8.47274C4.1194 8.66704 4.19152 8.85508 4.324 8.99726L6.97 11.6443C7.04128 11.7154 7.12616 11.7715 7.21958 11.8091C7.313 11.8467 7.41305 11.8652 7.51375 11.8633C7.61444 11.8614 7.71374 11.8393 7.8057 11.7982C7.89766 11.7572 7.9804 11.698 8.049 11.6243L12.041 6.63426C12.1771 6.49276 12.2523 6.30353 12.2504 6.10722C12.2485 5.9109 12.1698 5.72314 12.031 5.58426H12.03Z"
                                fill="#F1F5F9"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0 0.614258)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="ms-1">No credit card required</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent p-0">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M16 8.61426C16 10.736 15.1571 12.7708 13.6569 14.2711C12.1566 15.7714 10.1217 16.6143 8 16.6143C5.87827 16.6143 3.84344 15.7714 2.34315 14.2711C0.842855 12.7708 0 10.736 0 8.61426C0 6.49253 0.842855 4.45769 2.34315 2.9574C3.84344 1.45711 5.87827 0.614258 8 0.614258C10.1217 0.614258 12.1566 1.45711 13.6569 2.9574C15.1571 4.45769 16 6.49253 16 8.61426ZM12.03 5.58426C11.9586 5.51308 11.8735 5.45703 11.7799 5.41947C11.6863 5.38192 11.5861 5.36362 11.4853 5.36567C11.3845 5.36772 11.2851 5.39009 11.1932 5.43143C11.1012 5.47276 11.0185 5.53223 10.95 5.60626L7.477 10.0313L5.384 7.93726C5.24183 7.80478 5.05378 7.73266 4.85948 7.73608C4.66518 7.73951 4.47979 7.81822 4.34238 7.95564C4.20497 8.09305 4.12625 8.27843 4.12283 8.47274C4.1194 8.66704 4.19152 8.85508 4.324 8.99726L6.97 11.6443C7.04128 11.7154 7.12616 11.7715 7.21958 11.8091C7.313 11.8467 7.41305 11.8652 7.51375 11.8633C7.61444 11.8614 7.71374 11.8393 7.8057 11.7982C7.89766 11.7572 7.9804 11.698 8.049 11.6243L12.041 6.63426C12.1771 6.49276 12.2523 6.30353 12.2504 6.10722C12.2485 5.9109 12.1698 5.72314 12.031 5.58426H12.03Z"
                                fill="#F1F5F9"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="ms-1">1 month free trial</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col xl={{ span: 5, offset: 1 }} lg={12}>
                <div className="pt-xl-8 d-none d-xl-block">
                  <Image
                    src={ctaimg}
                    alt="CTA illustration"
                    fluid
                    className="w-xxl-100"
                  />
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

export default CTA;
