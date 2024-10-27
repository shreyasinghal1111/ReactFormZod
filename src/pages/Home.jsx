import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Home() {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
<div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-500">Welcome!</h1>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-gray-600 text-2xl text-center font-semibold">Name : {user.firstName} {user.lastName}</p>
          </div>
          <div>
            <p className="text-gray-600 text-2xl text-center font-semibold">Email : {user.email}</p>
          </div>
        </div>
        <h1 className='text-4xl font-bold  pt-5 text-green-500 text-center'>YOU DID IT✔</h1>
      </div>
    </div>
  );
}
