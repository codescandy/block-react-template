import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import heroAppScreen from '../../assets/images/landings/sass-v3/hero-app-screen.png';
import heroFrameLeft from '../../assets/images/landings/sass-v3/hero-frame-left.svg';
import heroFrameRight1 from '../../assets/images/landings/sass-v3/hero-frame-right-1.svg';
import heroFrameRight2 from '../../assets/images/landings/sass-v3/hero-frame-right-2.svg';
import { Col } from 'react-bootstrap';

const FeaturerCenterImage: React.FC = () => {
  return (
    <div>
      {/* Pattern background */}
      <div className="pattern-square" />

      {/* Main Section */}
      <section className='py-6'>        
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <Row className="justify-content-center">
            <Col xl={10} lg={10} xs={12} style={{ position: 'relative', textAlign: 'center' }}
             
            >
              {/* Main App Image */}
              <img
                src={heroAppScreen}
                alt="App Screen"
                style={{
                  maxWidth: '100%',
                  backgroundColor: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #dee2e6',
                }}
              />

              {/* Left Frame */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-80px',
                  transform: 'translateY(-50%)',
                  display: 'none',
                }}
                
                className="left-frame">
                <img src={heroFrameLeft} alt="Left Frame" />
              </div>

              {/* Right Frames */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-100px',
                  transform: 'translateY(-50%)',
                  display: 'none',
                }}
                className="right-frames"
              >
                <img
                  src={heroFrameRight1}
                  alt="Right Frame 1"
                  style={{ marginBottom: '1rem' }}
                 
                />
                <br />
                <img
                  src={heroFrameRight2}
                  alt="Right Frame 2"
                 
                />
              </div>
            </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
};

export default FeaturerCenterImage;
