import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1 container py-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <ion-icon name="shield-outline" style={{ fontSize: '2rem', color: '#0d6efd' }} className="me-3"></ion-icon>
              <h1>Here is the Admin Dashboard</h1>
            </div>
            
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <ion-icon name="people-outline" style={{ fontSize: '2rem' }} className="me-3"></ion-icon>
                      <div>
                        <h5 className="card-title">Total Users</h5>
                        <h3>450</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-3">
                <div className="card bg-info text-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <ion-icon name="library-outline" style={{ fontSize: '2rem' }} className="me-3"></ion-icon>
                      <div>
                        <h5 className="card-title">Total Courses</h5>
                        <h3>85</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-3">
                <div className="card bg-success text-white">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <ion-icon name="pulse-outline" style={{ fontSize: '2rem' }} className="me-3"></ion-icon>
                      <div>
                        <h5 className="card-title">System Health</h5>
                        <h3>Good</h3>
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

export default AdminDashboard;