import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-saffron via-white to-india-green" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Emblem of India" 
                className="w-8 h-8"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold leading-tight">
                MedoSphere: A Unified Digital Healthcare Ecosystem
              </h1>
              <p className="text-xs text-primary-foreground/80">
                Ministry of Health & Family Welfare, Government of India
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link>
            <Link to="/search" className="text-sm hover:text-accent transition-colors">Find Hospital</Link>
            <Link to="/schemes" className="text-sm hover:text-accent transition-colors">Schemes</Link>
            <Link to="/about" className="text-sm hover:text-accent transition-colors">About</Link>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link 
                  to={user?.role === 'doctor' ? '/doctor/dashboard' : '/patient/dashboard'}
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                >
                  <User className="h-4 w-4" />
                  {user?.name}
                </Link>
                <Button variant="secondary" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="secondary" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="accent" size="sm">Register</Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/search" className="block py-2 hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Find Hospital</Link>
            <Link to="/schemes" className="block py-2 hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Schemes</Link>
            <Link to="/about" className="block py-2 hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to={user?.role === 'doctor' ? '/doctor/dashboard' : '/patient/dashboard'}
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button variant="secondary" size="sm" onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full">
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex gap-2 pt-2">
                <Link to="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="secondary" size="sm" className="w-full">Login</Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="accent" size="sm" className="w-full">Register</Button>
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
