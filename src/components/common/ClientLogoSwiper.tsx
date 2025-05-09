import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import logo1 from '../../assets/images/client-logo/clients-logo-1.svg';
import logo2 from '../../assets/images/client-logo/clients-logo-2.svg';
import logo3 from '../../assets/images/client-logo/clients-logo-3.svg';
import logo4 from '../../assets/images/client-logo/clients-logo-4.svg';
import logo5 from '../../assets/images/client-logo/clients-logo-5.svg';

function ClientLogoSwiper() {
  return (
    <section className='py-6'>
      <Container>
        <Row className="justify-content-center">
    <Col xl={10} lg={12} xs={12}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={100}
            speed={400}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            breakpoints={{
              390: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
              <SwiperSlide key={index}>
                <div style={{ textAlign: 'center' }}>
                  <img src={logo} alt={`logo-${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
</Row>
    </Container>
    </section>
  );
}

export default ClientLogoSwiper;
