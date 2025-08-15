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
        <section className="position-relative overflow-hidden" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '90vh'
        }}>
          {/* Background Pattern */}
          <div className="position-absolute w-100 h-100" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3
          }}></div>
          
          <div className="container position-relative py-5">
            <div className="row align-items-center min-vh-75">
              <div className="col-lg-6 text-white mb-5 mb-lg-0">
                <div className="mb-4">
                  <span className="badge bg-light text-primary px-3 py-2 rounded-pill fw-normal">
                    <ion-icon name="trending-up-outline" className="me-2"></ion-icon>
                    #1 Online Learning Platform
                  </span>
                </div>
                
                <h1 className="display-3 fw-bold mb-4 lh-1">
                  Where <span className="text-warning">Global Learners</span>
                  <br />Come To Excel
                </h1>
                
                <p className="lead mb-4 opacity-90" style={{ fontSize: '1.25rem' }}>
                  Transform your career with world-class courses from industry experts. 
                  Join over 50,000 students who have already accelerated their learning journey.
                </p>
                
                <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                  <Link to="/register" className="btn btn-warning btn-lg px-4 py-3 fw-semibold shadow-lg">
                    <ion-icon name="rocket-outline" className="me-2"></ion-icon>
                    Start Learning Free
                  </Link>
                  <Link to="/courses" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                    <ion-icon name="play-circle-outline" className="me-2"></ion-icon>
                    Browse Courses
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="row g-4 text-center">
                  <div className="col-4">
                    <div className="h4 fw-bold mb-1">50K+</div>
                    <small className="text-light opacity-75">Active Students</small>
                  </div>
                  <div className="col-4">
                    <div className="h4 fw-bold mb-1">500+</div>
                    <small className="text-light opacity-75">Expert Instructors</small>
                  </div>
                  <div className="col-4">
                    <div className="h4 fw-bold mb-1">95%</div>
                    <small className="text-light opacity-75">Success Rate</small>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6 position-relative">
                <div className="position-relative">
                  {/* Main Hero Image */}
                  <img 
                  src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=422&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Happy graduate student with graduation cap"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ borderRadius: '2rem' }}
                  />
                  
                  {/* Floating Achievement Card */}
                  <div className="position-absolute top-0 end-0 me-4 mt-4 bg-white p-3 rounded-3 shadow-lg animate-float">
                    <div className="d-flex align-items-center">
                      <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                        <ion-icon name="trophy" className="text-success" style={{ fontSize: '1.5rem' }}></ion-icon>
                      </div>
                      <div>
                        <div className="fw-bold text-dark mb-1">Achievement</div>
                        <small className="text-muted">Course Completed!</small>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats Card */}
                  <div className="position-absolute bottom-0 start-0 ms-4 mb-4 bg-white p-3 rounded-3 shadow-lg">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                        <ion-icon name="people" className="text-primary" style={{ fontSize: '1.5rem' }}></ion-icon>
                      </div>
                      <div>
                        <div className="fw-bold text-dark mb-1">2,847</div>
                        <small className="text-muted">Students Enrolled</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Courses Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">Explore Our Courses</h2>
              <p className="lead text-muted max-w-2xl mx-auto">
                Discover cutting-edge courses designed by industry professionals to help you master in-demand skills and advance your career.
              </p>
            </div>

            {/* Course Filter Tabs */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {[
                { name: 'All Courses', active: true },
                { name: 'Web Courses', active: false },
                { name: 'UI Courses', active: false },
                { name: 'Tech Courses', active: false },
                { name: 'Free Courses', active: false },
                { name: 'Course Bundle', active: false }
              ].map((tab, index) => (
                <button
                  key={tab.name}
                  className={`btn ${tab.active ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill px-4 py-2`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="row g-4">
              {/* Course 1 - Data Science */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      className="card-img-top"
                      alt="Data Science Course"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-warning text-dark">
                      Bestseller
                    </span>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2">
                      <ion-icon name="heart-outline" className="text-muted"></ion-icon>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">
                      Understanding the Fundamentals of Data Science
                    </h5>
                    <p className="text-muted small mb-3">
                      <ion-icon name="person-outline" className="me-1"></ion-icon>
                      by Sarah Wilson • 
                      <ion-icon name="star" className="text-warning ms-2 me-1"></ion-icon>
                      4.8 (234 reviews)
                    </p>
                    <p className="card-text text-muted flex-grow-1">
                      Master the core concepts of data science, from statistics to machine learning.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="h5 fw-bold text-primary mb-0">FCFA49000</span>
                        <small className="text-muted text-decoration-line-through ms-2">FCFA79000</small>
                      </div>
                      <Link to="/courses" className="btn btn-outline-primary btn-sm">
                        <ion-icon name="add-outline" className="me-1"></ion-icon>
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 2 - UX Design */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      className="card-img-top"
                      alt="UX Design Course"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-success">
                      Popular
                    </span>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2">
                      <ion-icon name="heart-outline" className="text-muted"></ion-icon>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">
                      UI/UX Design Masterclass: Your First Step Toward Greatness
                    </h5>
                    <p className="text-muted small mb-3">
                      <ion-icon name="person-outline" className="me-1"></ion-icon>
                      by Mark Johnson • 
                      <ion-icon name="star" className="text-warning ms-2 me-1"></ion-icon>
                      4.9 (312 reviews)
                    </p>
                    <p className="card-text text-muted flex-grow-1">
                      Create stunning user interfaces and exceptional user experiences.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="h5 fw-bold text-primary mb-0">FCFA59000</span>
                        <small className="text-muted text-decoration-line-through ms-2">FCFA89000</small>
                      </div>
                      <Link to="/courses" className="btn btn-outline-primary btn-sm">
                        <ion-icon name="add-outline" className="me-1"></ion-icon>
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 3 - Digital Marketing */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      className="card-img-top"
                      alt="Digital Marketing Course"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-info">
                      Trending
                    </span>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2">
                      <ion-icon name="heart-outline" className="text-muted"></ion-icon>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">
                      Complete Digital Marketing Bundle for Business Growth
                    </h5>
                    <p className="text-muted small mb-3">
                      <ion-icon name="person-outline" className="me-1"></ion-icon>
                      by Emily Davis • 
                      <ion-icon name="star" className="text-warning ms-2 me-1"></ion-icon>
                      4.7 (189 reviews)
                    </p>
                    <p className="card-text text-muted flex-grow-1">
                      Master digital marketing strategies that drive real business results.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="h5 fw-bold text-primary mb-0">FCFA39000</span>
                        <small className="text-muted text-decoration-line-through ms-2">FCFA69000</small>
                      </div>
                      <Link to="/courses" className="btn btn-outline-primary btn-sm">
                        <ion-icon name="add-outline" className="me-1"></ion-icon>
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 4 - Web Development */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      className="card-img-top"
                      alt="Web Development Course"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary">
                      New
                    </span>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2">
                      <ion-icon name="heart-outline" className="text-muted"></ion-icon>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">
                      Full-Stack Web Development for Modern Digital Solutions
                    </h5>
                    <p className="text-muted small mb-3">
                      <ion-icon name="person-outline" className="me-1"></ion-icon>
                      by David Chen • 
                      <ion-icon name="star" className="text-warning ms-2 me-1"></ion-icon>
                      4.8 (156 reviews)
                    </p>
                    <p className="card-text text-muted flex-grow-1">
                      Build modern web applications from front-end to back-end.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="h5 fw-bold text-primary mb-0">FCFA79000</span>
                        <small className="text-muted text-decoration-line-through ms-2">FCFA129000</small>
                      </div>
                      <Link to="/courses" className="btn btn-outline-primary btn-sm">
                        <ion-icon name="add-outline" className="me-1"></ion-icon>
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 5 - Project Management */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      className="card-img-top"
                      alt="Project Management Course"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-dark">
                      Professional
                    </span>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2">
                      <ion-icon name="heart-outline" className="text-muted"></ion-icon>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">
                      Project Management Professional with Leadership Skills
                    </h5>
                    <p className="text-muted small mb-3">
                      <ion-icon name="person-outline" className="me-1"></ion-icon>
                      by Jessica Rodriguez • 
                      <ion-icon name="star" className="text-warning ms-2 me-1"></ion-icon>
                      4.9 (203 reviews)
                    </p>
                    <p className="card-text text-muted flex-grow-1">
                      Lead projects successfully with proven management methodologies.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="h5 fw-bold text-primary mb-0">FCFA89000</span>
                        <small className="text-muted text-decoration-line-through ms-2">FCFA139000</small>
                      </div>
                      <Link to="/courses" className="btn btn-outline-primary btn-sm">
                        <ion-icon name="add-outline" className="me-1"></ion-icon>
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 6 - Mobile App Development */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="position-relative">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      className="card-img-top"
                      alt="Mobile App Development Course"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-danger">
                      Hot
                    </span>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2">
                      <ion-icon name="heart-outline" className="text-muted"></ion-icon>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">
                      Custom Mobile App Development for iOS and Android
                    </h5>
                    <p className="text-muted small mb-3">
                      <ion-icon name="person-outline" className="me-1"></ion-icon>
                      by Alex Thompson • 
                      <ion-icon name="star" className="text-warning ms-2 me-1"></ion-icon>
                      4.6 (167 reviews)
                    </p>
                    <p className="card-text text-muted flex-grow-1">
                      Build native mobile applications for both iOS and Android platforms.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div>
                        <span className="h5 fw-bold text-primary mb-0">FCFA99000</span>
                        <small className="text-muted text-decoration-line-through ms-2">FCFA149000</small>
                      </div>
                      <Link to="/courses" className="btn btn-outline-primary btn-sm">
                        <ion-icon name="add-outline" className="me-1"></ion-icon>
                        Enroll
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Courses Button */}
            <div className="text-center mt-5">
              <Link to="/courses" className="btn btn-primary btn-lg px-5 py-3 fw-semibold">
                <ion-icon name="library-outline" className="me-2"></ion-icon>
                See All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Our Platform?</h2>
              <p className="lead text-muted">
                Experience the best in online education with our comprehensive learning ecosystem.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="feature-card p-4 h-100">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px' }}>
                    <ion-icon name="book-outline" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></ion-icon>
                  </div>
                  <h5 className="fw-bold mb-3">Interactive Courses</h5>
                  <p className="text-muted">
                    Access a wide variety of courses with interactive content, quizzes, and assignments that keep you engaged.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="feature-card p-4 h-100">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px' }}>
                    <ion-icon name="people-outline" style={{ fontSize: '2.5rem', color: '#198754' }}></ion-icon>
                  </div>
                  <h5 className="fw-bold mb-3">Expert Teachers</h5>
                  <p className="text-muted">
                    Learn from qualified and experienced teachers who are passionate about education and your success.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="feature-card p-4 h-100">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px' }}>
                    <ion-icon name="trophy-outline" style={{ fontSize: '2.5rem', color: '#ffc107' }}></ion-icon>
                  </div>
                  <h5 className="fw-bold mb-3">Achievements</h5>
                  <p className="text-muted">
                    Track your progress and earn certificates upon course completion to showcase your skills.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center">
                <div className="feature-card p-4 h-100">
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px' }}>
                    <ion-icon name="time-outline" style={{ fontSize: '2.5rem', color: '#0dcaf0' }}></ion-icon>
                  </div>
                  <h5 className="fw-bold mb-3">Flexible Learning</h5>
                  <p className="text-muted">
                    Study at your own pace with lifetime access to course materials and 24/7 support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">What Our Students Say</h2>
              <p className="lead text-muted">
                Hear from thousands of successful learners who transformed their careers.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      className="rounded-circle mb-3"
                      alt="Student testimonial"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="text-warning mb-3">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="text-muted fst-italic mb-3">
                      "The courses are incredibly well-structured and the instructors are top-notch. I landed my dream job within 3 months!"
                    </p>
                    <h6 className="fw-bold mb-1">Maria Garcia</h6>
                    <small className="text-muted">Software Developer</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      className="rounded-circle mb-3"
                      alt="Student testimonial"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="text-warning mb-3">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="text-muted fst-italic mb-3">
                      "Flexible learning schedule and excellent support. Perfect for working professionals like me."
                    </p>
                    <h6 className="fw-bold mb-1">James Wilson</h6>
                    <small className="text-muted">Product Manager</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      className="rounded-circle mb-3"
                      alt="Student testimonial"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="text-warning mb-3">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="text-muted fst-italic mb-3">
                      "The hands-on projects and real-world applications made all the difference in my learning journey."
                    </p>
                    <h6 className="fw-bold mb-1">Sarah Johnson</h6>
                    <small className="text-muted">UX Designer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 position-relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div className="container position-relative">
            <div className="row justify-content-center text-center text-white">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="lead mb-4 opacity-90">
                  Join over 50,000 students who have already transformed their careers with our expert-led courses.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Link to="/register" className="btn btn-warning btn-lg px-5 py-3 fw-semibold shadow-lg">
                    <ion-icon name="rocket-outline" className="me-2"></ion-icon>
                    Start Free Trial
                  </Link>
                  <Link to="/courses" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">
                    <ion-icon name="library-outline" className="me-2"></ion-icon>
                    Browse Courses
                  </Link>
                </div>
                
                <div className="row mt-5 text-center">
                  <div className="col-4">
                    <div className="h3 fw-bold mb-1">50K+</div>
                    <small className="opacity-75">Happy Students</small>
                  </div>
                  <div className="col-4">
                    <div className="h3 fw-bold mb-1">500+</div>
                    <small className="opacity-75">Courses Available</small>
                  </div>
                  <div className="col-4">
                    <div className="h3 fw-bold mb-1">95%</div>
                    <small className="opacity-75">Success Rate</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        .course-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .min-vh-75 {
          min-height: 75vh;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .badge {
          font-weight: 500;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
