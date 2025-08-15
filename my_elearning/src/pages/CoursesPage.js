import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CoursesPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1 container py-4">
        <div className="d-flex align-items-center mb-4">
          <ion-icon name="book-outline" style={{ fontSize: '2rem', color: '#0d6efd' }} className="me-3"></ion-icon>
          <h1>Here is the Courses Page</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;