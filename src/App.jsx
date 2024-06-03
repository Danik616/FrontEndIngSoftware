import Container from './components/Component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FormPQRS from './pages/FormPQRS';
import Logout from './pages/Logout';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './routes';

function App() {
  return (
    <>
      <AuthProvider>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/login' element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/pqrs'>
                  <Route path='' element={<FormPQRS />} />
                </Route>
              </Route>
              <Route
                path='*'
                element={
                  <h1 className='text-black bg-white text-2xl text-center'>
                    Not Found
                  </h1>
                }
              />
            </Routes>
          </BrowserRouter>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
