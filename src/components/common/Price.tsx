import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import pricingPlans from "../../data/pricingPlans.json";

const Price: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <section className="py-lg-8 py-5 price-wrapper" data-cue="fadeIn">
      <Container>
        <Row className="justify-content-center mb-8">
          <Col xl={6} lg={10} xs={12}>
            <div className="text-center d-flex flex-column gap-5">
              <div className="d-flex justify-content-center">
                <span className="bg-primary bg-opacity-10 text-primary border-primary border px-3 py-2 fs-6 rounded-pill lh-1 align-items-center d-flex">
                  <span className="ms-1 text-uppercase ls-md fw-semibold">Pricing</span>
                </span>
              </div>

              <div className="d-flex flex-column gap-3 mx-lg-8">
                <h1 className="mb-0">Plan to unlock a new level of productivity</h1>
                <p className="mb-0">Fair and simple pricing making content editing and generation accessible to everyone.</p>
              </div>

              <div className="mb-5">
                <div className="price-switcher-wrapper switcher">
                  <p className="mb-0 pe-3">Monthly</p>
                  <div className="price-switchers" onClick={togglePricing}>
                    <div className={`price-switcher ${!isYearly ? "price-switcher-active" : ""}`}></div>
                    <div className={`price-switcher ${isYearly ? "price-switcher-active" : ""}`}></div>
                    <div className="switcher-button bg-primary"></div>
                  </div>
                  <p className="mb-0 ps-3">Yearly</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} xs={12}>
            <Row className="align-items-center g-md-0 gy-4">
              {pricingPlans.map((plan) => (
                <Col md={6} xs={12} key={plan.id} data-cue="slideInLeft">
                  <Card className="bg-light pricing rounded-end-md-0">
                    <Card.Body className="d-flex flex-column gap-4">
                      <div>
                        <h3>{plan.title}</h3>
                        <p className="mb-0">{plan.description}</p>
                      </div>
                      <h2 className="mb-0 d-flex align-items-center">
                        <span>${plan.price}</span>
                        <span className="price-duration fs-6 text-body ms-2">/{plan.duration}</span>
                      </h2>
                      <hr className="my-0" />
                      <div>
                        <h5 className="mb-3">What’s included</h5>
                        <ul className="list-unstyled flex-column d-flex gap-2">
                          {plan.features.map((feature, index) => (
                            <li className="d-flex align-items-start" key={index}>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M13.485 1.929a.75.75 0 0 1 0 1.06L6.03 10.445 2.515 6.93a.75.75 0 1 1 1.06-1.06l2.455 2.454 6.396-6.395a.75.75 0 0 1 1.06 0Z" />
                                </svg>
                              </span>
                              <span className="ms-2">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Price;
