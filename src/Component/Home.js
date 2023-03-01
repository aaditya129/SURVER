import React from 'react';
import { Carousel } from 'react-bootstrap';
import aadi from './aadi.png'

export default function Home() {
  return (
    <>
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"600px",objectFit:"cover"}}
          src="https://i0.wp.com/calmatters.org/wp-content/uploads/2020/08/surveillance-camera.jpg?fit=2204%2C1300&ssl=1"
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"600px",objectFit:"cover"}}
          src="https://www.ovt.com/wp-content/uploads/2021/12/OmniVision_Applications_Security_Use-Cases_CommercialIndustrialSecurityCameras_HeroBanner-scaled.jpg"
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"600px",objectFit:"cover"}}
          src="https://www.cdc.gov/surveillance/neurology/images/GettyImages-871148930-crp2.jpg?_=79733"
          alt="Third slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div style={{textAlign:"center"}}>
        <img src={aadi} alt=".." />
    </div>
    </>
  );
}