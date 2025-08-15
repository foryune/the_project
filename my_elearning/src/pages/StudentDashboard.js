import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StudentDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1 container py-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <ion-icon name="school-outline" style={{ fontSize: '2rem', color: '#0d6efd' }} className="me-3"></ion-icon>
              <h1>Here is the Student Dashboard</h1>
            </div>
            
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <ion-icon name="book-outline" style={{ fontSize: '2rem' }} className="me-3"></ion-icon>
                      <div>
                        <h5 className="card-title">Enrolled Courses</h5>
                        <h3>5</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-3">
                <div className="card bg-success text-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <ion-icon name="checkmark-circle-outline" style={{ fontSize: '2rem' }} className="me-3"></ion-icon>
                      <div>
                        <h5 className="card-title">Completed</h5>
                        <h3>2</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-3">
                <div className="card bg-warning text-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <ion-icon name="time-outline" style={{ fontSize: '2rem' }} className="me-3"></ion-icon>
                      <div>
                        <h5 className="card-title">Assignments</h5>
                        <h3>3</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;