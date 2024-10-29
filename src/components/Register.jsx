import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { registerUser } from '../hooks/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const registerSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  birthday: z.string().optional(),
  gender: z.enum(['Female', 'Male', 'Other']),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number required'),
  subject: z.string().min(1, 'Please select a subject')
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center animate-bounce">Register Here!</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <FormInput
            type="text"
            register={register}
            name="firstName"
            error={errors.firstName}
            placeholder="First Name"
          />
          <FormInput
            type="text"
            register={register}
            name="lastName"
            error={errors.lastName}
            placeholder="Last Name"
          />
        </div>

        <FormInput
          type="date"
          register={register}
          name="birthday"
          error={errors.birthday}
          placeholder="Birthday"
        />

        <div className="mb-4">
          <label className="block mb-1">Gender:</label>
          <div className="flex items-center space-x-4">
            {['Female', 'Male', 'Other'].map((option) => (
              <label key={option} className="flex items-center">
                <input 
                  type="radio" 
                  value={option} 
                  {...register('gender')} 
                  className="mr-2" 
                />
                {option}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <FormInput
            type="email"
            register={register}
            name="email"
            error={errors.email}
            placeholder="Email"
          />
          <FormInput
            type="tel"
            register={register}
            name="phone"
            error={errors.phone}
            placeholder="+91"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Options</label>
          <select {...register('subject')} className="w-full p-2 border rounded">
            <option value="">Select</option>
            <option value="Subject 1">Subject 1</option>
            <option value="Subject 2">Subject 2</option>
          </select>
          <p className="text-red-500 text-sm">{errors.subject?.message}</p>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">
          Submit✏
        </button>
      </form>
    </div>
  );
}