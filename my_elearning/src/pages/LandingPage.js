import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4">
                  Welcome to E-Learning Platform
                </h1>
                <p className="lead mb-4">
                  Discover, learn, and grow with our comprehensive online learning platform. 
                  Join thousands of students and teachers in an interactive learning experience.
                </p>
                <div className="d-flex gap-3">
                  <Link to="/register" className="btn btn-light btn-lg">
                    <ion-icon name="person-add-outline" className="me-2"></ion-icon>
                    Get Started
                  </Link>
                  <Link to="/login" className="btn btn-outline-light btn-lg">
                    <ion-icon name="log-in-outline" className="me-2"></ion-icon>
                    Login
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center">
                  <ion-icon name="school" style={{ fontSize: '15rem', opacity: 0.7 }}></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <ion-icon name="book-outline" style={{ fontSize: '3rem', color: '#0d6efd' }}></ion-icon>
                    <h5 className="card-title mt-3">Interactive Courses</h5>
                    <p className="card-text">
                      Access a wide variety of courses with interactive content, quizzes, and assignments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <ion-icon name="people-outline" style={{ fontSize: '3rem', color: '#0d6efd' }}></ion-icon>
                    <h5 className="card-title mt-3">Expert Teachers</h5>
                    <p className="card-text">
                      Learn from qualified and experienced teachers who are passionate about education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <ion-icon name="trophy-outline" style={{ fontSize: '3rem', color: '#0d6efd' }}></ion-icon>
                    <h5 className="card-title mt-3">Achievements</h5>
                    <p className="card-text">
                      Track your progress and earn certificates upon course completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;