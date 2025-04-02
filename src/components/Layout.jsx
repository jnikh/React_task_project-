import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authslice';

const Layout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gray-100">
     
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Task</Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            {isAuthenticated ? (
              <>
                <Link to="/form" className="hover:underline">Form</Link>
                <Link to="/data" className="hover:underline">Data</Link>
                <button onClick={handleLogout} className="hover:underline">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:underline">Login</Link>
                <Link to="/register" className="hover:underline">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main content with sidebar */}
      <div className="container mx-auto flex mt-4">
       
        {isAuthenticated && (
          <div className="w-64 bg-white p-4 rounded shadow mr-4">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li><Link to="/form" className="block p-2 hover:bg-blue-50 rounded">Form</Link></li>
              <li><Link to="/data" className="block p-2 hover:bg-blue-50 rounded">Data</Link></li>
            </ul>
          </div>
        )}
        
        {/* Page content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;