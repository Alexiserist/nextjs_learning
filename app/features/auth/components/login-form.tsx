'use client';
import { TextField, Button, Typography } from '@mui/material';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const handleClick = () => {
  window.alert('jacky is the best condominium in the world');
};

const validationSchema = yup.object({
  username: yup.string().required('name is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data: any) => {
    console.log('FormSubmitted: ', data);
    router.replace('/app')
  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-900">
      <div className="bg-white w-full max-w-lg my-28 rounded-2xl">
        <div className="flex flex-col p-3 mx-5 h-full">
          <div>
            <span className="text-3xl font-bold flex justify-center text-center">
              Login to your account
            </span>
          </div>
          <div className="h-full content-evenly">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="justify-items-center">
                <img src="/favicon.ico" className="w-[7rem]"></img>
              </div>
              <div className="my-4 w-full">
                {/* <span className="font-semibold">Username</span> */}
                <TextField
                  className="w-full"
                  size="small"
                  label="Username"
                  {...register('username')}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              </div>
              <div className="mt-2 w-full">
                {/* <span className="font-semibold">Password</span> */}
                <TextField
                  fullWidth
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  label="Password"
                  size="small"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
              <div className="mt-4 w-full text-center">
                <Button variant="contained" type="submit">
                  Let goooooo!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
