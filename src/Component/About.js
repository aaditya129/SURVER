import React from 'react';
// import surveillanceImg from '../images/surveillance.jpg';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Our Surveillance System</h2>
          <p>
            We provide high-quality surveillance systems to keep your property safe and secure. Our systems use the latest technology to provide clear and reliable footage, even in low-light conditions. We offer a range of products to suit any need, from small businesses to large commercial properties.
          </p>
          <p>
            Our team of experts is available to assist with installation and setup, and we offer ongoing support and maintenance to ensure that your system is always working at its best.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://cumanagement.com/sites/default/files/2018-10/security-camera-lens.jpg" alt="Surveillance" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default About;

