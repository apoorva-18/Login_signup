import { useState } from 'react'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const endpoint = isLogin ? '/login' : '/signup'
      const response = await fetch(`http://localhost:8001${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(`Success! Welcome ${data.username}`)
        setUser(data)
        setIsAuthenticated(true)
        setFormData({ username: '', email: '', password: '' })
      } else {
        setMessage(data.detail || 'An error occurred')
      }
    } catch (error) {
      setMessage('Network error. Please check if the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setMessage('')
  }

  // Landing Page Component
  const LandingPage = () => (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-brand">
          <h2>Welcome Dashboard</h2>
        </div>
        <div className="nav-user">
          <span>Hello, {user?.username}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard">
        <div className="welcome-section">
          <h1>Welcome to Your Dashboard</h1>
          <p>You've successfully logged in to your account.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <h3>Analytics</h3>
            <p>View your performance metrics</p>
            <button className="stat-btn">View Details</button>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <h3>Projects</h3>
            <p>Manage your active projects</p>
            <button className="stat-btn">View Projects</button>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <h3>Team</h3>
            <p>Connect with your team members</p>
            <button className="stat-btn">View Team</button>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Customize your preferences</p>
            <button className="stat-btn">Open Settings</button>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">✅</div>
              <div className="activity-content">
                <h4>Login Successful</h4>
                <p>You logged in successfully at {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📧</div>
              <div className="activity-content">
                <h4>Email Verified</h4>
                <p>Your email {user?.email} is verified</p>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🎉</div>
              <div className="activity-content">
                <h4>Welcome!</h4>
                <p>Welcome to your new dashboard experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Auth Form Component
  const AuthForm = () => (
    <div className="app">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p>{isLogin ? 'Sign in to your account' : 'Join us today'}</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required={!isLogin}
                  placeholder="Enter your username"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
            </div>

            {message && (
              <div className={`message ${message.includes('Success') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                className="toggle-btn"
                onClick={() => {
                  setIsLogin(!isLogin)
                  setMessage('')
                  setFormData({ username: '', email: '', password: '' })
                }}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return isAuthenticated ? <LandingPage /> : <AuthForm />
}

export default App
