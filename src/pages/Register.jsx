// import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';


const registerSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  birthday: z.string().optional(),
  gender: z.enum(['Female', 'Male', 'Other']),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
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
    navigate('/login'); // This will take user to login after registration
  };

  return (

<div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Here!</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              {...register('firstName')}
              placeholder="First Name"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
          </div>
          <div>
            <input
              {...register('lastName')}
              placeholder="Last Name"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="date"
            {...register('birthday')}
            placeholder="Birthday"
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500 text-sm">{errors.birthday?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Gender:</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" value="Female" {...register('gender')} className="mr-2" />
              Female
            </label>
            <label className="flex items-center">
              <input type="radio" value="Male" {...register('gender')} className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input type="radio" value="Other" {...register('gender')} className="mr-2" />
              Other
            </label>
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              {...register('email')}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div>
            <input
              {...register('phone')}
              placeholder="+ 91"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>
          </div>
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

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">Submit✏</button>
      </form>
    </div>
  );
}
