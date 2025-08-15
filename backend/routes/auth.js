const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { auth, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', auth, getMe);

// Role-based dashboard routes
router.get('/student-dashboard', auth, authorize('student'), (req, res) => {
  res.json({ 
    message: 'Welcome to Student Dashboard',
    user: req.user,
    dashboardData: {
      enrolledCourses: 5,
      completedCourses: 2,
      upcomingAssignments: 3
    }
  });
});

router.get('/teacher-dashboard', auth, authorize('teacher'), (req, res) => {
  res.json({ 
    message: 'Welcome to Teacher Dashboard',
    user: req.user,
    dashboardData: {
      createdCourses: 8,
      totalStudents: 124,
      pendingGrading: 15
    }
  });
});

router.get('/admin-dashboard', auth, authorize('admin'), (req, res) => {
  res.json({ 
    message: 'Welcome to Admin Dashboard',
    user: req.user,
    dashboardData: {
      totalUsers: 450,
      totalCourses: 85,
      systemHealth: 'Good'
    }
  });
});

module.exports = router;