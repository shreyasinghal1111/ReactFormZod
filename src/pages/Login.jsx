import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUser({
      email: data.email,
      firstName: data.email.split('@')[0],
      // lastName: 'User',
      isAuthenticated: true
    }));
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <input
              type="password"
              {...register('password')}
              placeholder="Password"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
