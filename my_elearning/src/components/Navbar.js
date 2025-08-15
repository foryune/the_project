import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'student':
        return '/student-dashboard';
      case 'teacher':
        return '/teacher-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <ion-icon name="school-outline" className="me-2"></ion-icon>
          E-Learning Platform
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to={getDashboardLink()}>
                    <ion-icon name="home-outline" className="me-1"></ion-icon>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/courses">
                    <ion-icon name="book-outline" className="me-1"></ion-icon>
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/messages">
                    <ion-icon name="mail-outline" className="me-1"></ion-icon>
                    Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/profile">
                    <ion-icon name="person-outline" className="me-1"></ion-icon>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/settings">
                    <ion-icon name="settings-outline" className="me-1"></ion-icon>
                    Settings
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/about">
                <ion-icon name="information-circle-outline" className="me-1"></ion-icon>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/contact">
                <ion-icon name="call-outline" className="me-1"></ion-icon>
                Contact
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown"
                >
                  <ion-icon name="person-circle-outline" className="me-1"></ion-icon>
                  {user.firstName} {user.lastName}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <ion-icon name="person-outline" className="me-2"></ion-icon>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      <ion-icon name="settings-outline" className="me-2"></ion-icon>
                      Settings
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <ion-icon name="log-out-outline" className="me-2"></ion-icon>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <ion-icon name="log-in-outline" className="me-1"></ion-icon>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <ion-icon name="person-add-outline" className="me-1"></ion-icon>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;