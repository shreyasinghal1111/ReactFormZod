import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { loginUser } from '../hooks/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

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
      isAuthenticated: true
    }));
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput 
            type="email"
            register={register}
            name="email"
            error={errors.email}
            placeholder="Email"
          />

          <FormInput 
            type="password"
            register={register}
            name="password"
            error={errors.password}
            placeholder="Password"
          />

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