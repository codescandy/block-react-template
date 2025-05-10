import { Container, Row, Col, Card, Image, Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
 // SVG converted to a React component
import avatar1 from "../../assets/images/avatar/avatar-1.jpg";
import avatar2 from "../../assets/images/avatar/avatar-2.jpg";
import avatar3 from "../../assets/images/avatar/avatar-3.jpg";
import avatar4 from "../../assets/images/avatar/avatar-4.jpg";
import avatar6 from "../../assets/images/avatar/avatar-6.jpg";
import avatar7 from "../../assets/images/avatar/avatar-7.jpg";


const testimonials = [
  {
    message:
      "Aliquam pretium justo dui, eget fringilla nisl aliquet id. Vestibulum posuere orci vitae ante suscipit, in auctor elit pulvinar.",
    name: "Daniel Leon",
    role: "Time Management Consultant",
    avatar: avatar1,
  },
  {
    message:
      "Quisque tristique volutpat urna in sagittis. Praesent elementum purus et enim vulputate vestibulum.",
    name: "Hector Pratt",
    role: "Fitness Trainer",
    avatar: avatar2,
  },
  {
    message:
      "Morbi fermentum nisl dolor, vel tincidunt turpis consequat at. Morbi vitae sollicitudin quam. Praesent ullamcorper porta sagittis.",
    name: "Adrian Lopez",
    role: "Travel Advisor",
    avatar: avatar4,
  },
  {
    message:
      "Nulla id mauris id nisi venenatis fringilla et eget est ullam malesuada dolor at est molestie mattis. Mauris finibus molestie est vitae aliquet.",
    name: "Erica Nixon",
    role: "Event Planner",
    avatar: avatar3,
  },
  {
    message:
      "Sed nunc felis, tempor in consectetur ut, consequat quis velit. Mauris at dictum est. Donec quam quam.",
    name: "Virginia Santiago",
    role: "Career Counselor",
    avatar: avatar6,
  },
  {
    message:
      "Phasellus luctus fermentum vehicula. Pellentesque imperdiet, est vitae lacinia consequat, lorem nulla pulvinar nulla, eget varius tellus velit quis metus.",
    name: "Amin Matthams",
    role: "Cybersecurity Expert",
    avatar: avatar7,
  },
];

const Community = () => {
  return (
    <section className="py-lg-5 py-4">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xl={6} lg={10}>
            <div className="text-center d-flex flex-column gap-4">
              <div className="d-flex justify-content-center">
                <span className="bg-primary bg-opacity-10 text-primary border border-primary px-3 py-2 fs-6 rounded-pill lh-1 d-flex align-items-center">
              
                  <span className="ms-1 text-uppercase fw-semibold">Community</span>
                </span>
              </div>
              <div className="d-flex flex-column gap-3 mx-lg-5">
                <h1 className="mb-0">Join the community</h1>
                <p className="mb-0">
                  Don’t just take it from us. Here’s what some of our happy customers are saying.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="gy-4 gy-md-5">
          {testimonials.map((testimonial, idx) => (
            <Col
              key={idx}
              lg={4}
              md={6}
              className={`d-flex flex-column gap-4 ${idx === 0 || idx === 4 ? "mt-lg-5" : ""}`}
            >
              <Card className="bg-light card-lift">
                <Card.Body className="text-body">
                  <p className="mb-0">“{testimonial.message}”</p>
                  <div className="mt-4 d-flex align-items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      roundedCircle
                      className="avatar avatar-lg border p-1 bg-white"
                    />
                    <div className="ms-3 lh-1">
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <small>{testimonial.role}</small>
                    </div>
                  </div>
                </Card.Body>
                <a href="#" className="stretched-link" />
              </Card>
            </Col>
          ))}
           <Col xs={12} className="text-center d-flex flex-row justify-content-center gap-3">
           <Link to={'/contact'}>
              <Button variant="primary">Talk to sales</Button>
            </Link>
            <Link to={'/contact'}>
              <Button variant="outline-primary">Sign up for free</Button>
            </Link>
           
    
  </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Community;
