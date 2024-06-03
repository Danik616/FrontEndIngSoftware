import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    }
  }, [isAuthenticated, logout, navigate]);

  return <div>Logout</div>;
};

export default Logout;