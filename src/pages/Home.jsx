import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { data: users, status, error } = useSelector((state) => state.users);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>
      
      {isAuthenticated && (
        <p className="mb-4">Welcome, {user?.email}!</p>
      )}
      
      <h2 className="text-xl font-semibold mb-4">User List from API</h2>
      
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <h3 className='font-bold'>{user.id}</h3>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">{user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;