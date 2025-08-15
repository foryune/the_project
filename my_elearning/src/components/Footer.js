import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="d-flex align-items-center mb-3 fw-bold">
              <ion-icon name="school-outline" className="me-2" style={{ fontSize: '1.5rem' }}></ion-icon>
              E-Learning Platform
            </h5>
            <p className="text-muted mb-3">
              Empowering education through technology. Join thousands of learners and educators in building a brighter future through quality online education.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-decoration-none">
                <ion-icon name="logo-facebook" style={{ fontSize: '1.5rem' }}></ion-icon>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <ion-icon name="logo-twitter" style={{ fontSize: '1.5rem' }}></ion-icon>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <ion-icon name="logo-linkedin" style={{ fontSize: '1.5rem' }}></ion-icon>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <ion-icon name="logo-instagram" style={{ fontSize: '1.5rem' }}></ion-icon>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="information-circle-outline" className="me-2"></ion-icon>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="call-outline" className="me-2"></ion-icon>
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="/courses" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="book-outline" className="me-2"></ion-icon>
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="help-circle-outline" className="me-2"></ion-icon>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/help" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="help-outline" className="me-2"></ion-icon>
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="shield-outline" className="me-2"></ion-icon>
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="document-outline" className="me-2"></ion-icon>
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/support" className="text-light text-decoration-none d-flex align-items-center hover-link">
                  <ion-icon name="chatbubble-outline" className="me-2"></ion-icon>
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-muted small mb-3">
              Stay updated with our latest courses and educational content.
            </p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email"
                style={{ borderRadius: '0.375rem 0 0 0.375rem' }}
              />
              <button className="btn btn-primary" type="button">
                <ion-icon name="send-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <small className="text-muted">
              &copy; 2025 E-Learning Platform. All rights reserved.
            </small>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="text-muted">
              Made with <ion-icon name="heart" className="text-danger"></ion-icon> for education
            </small>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hover-link:hover {
          color: #0d6efd !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

