import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FormPage from './pages/FormPage';
import DataPage from './pages/Datapage';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="form" element={<FormPage />} />
          <Route path="data" element={<DataPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;