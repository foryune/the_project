import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="d-flex align-items-center">
              <ion-icon name="school-outline" className="me-2"></ion-icon>
              E-Learning Platform
            </h5>
            <p className="text-muted">Empowering education through technology</p>
          </div>
          <div className="col-md-6">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  <ion-icon name="information-circle-outline" className="me-1"></ion-icon>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  <ion-icon name="call-outline" className="me-1"></ion-icon>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <small>&copy; 2025 E-Learning Platform. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;