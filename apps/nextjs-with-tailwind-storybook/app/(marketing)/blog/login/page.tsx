'use client'

import React from 'react'
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@nx-nextjs-tailwind-storybook/data-access';
import InputText from 'libs/ui/src/lib/Form/Input/Input';
import InputPasswordText from 'libs/ui/src/lib/Form/Input/InputPassword';
import Button from 'libs/ui/src/lib/Button/Button';


const LoginSchema = z.object({
  email: z.string().min(1, { message: 'Email Required' }).email(),
  password: z.string().min(1, { message: 'Password Required' }),
});

type Login = z.infer<typeof LoginSchema>;


const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Login>({ resolver: zodResolver(LoginSchema) });

  const [loginMutation] = useLoginMutation({
    onCompleted(data) {
      localStorage.setItem('authToken', data.login.authToken)
      window.location.href = '/blog'
    },
    onError(err) {
      setError('root.invalidCredentials', {
        type: 'disabled',
        message: err.message,
      });
    },
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    loginMutation({
      variables: { email: data.email, password: data.password },
    })
  };

  return (
    <div className='grid place-items-center h-full w-full'>
      <form className='outline outline-1 rounded-md outline-slate-300 p-5' onSubmit={handleSubmit(onSubmit)}>
        <InputText size={'full'} label='Email Address' {...register('email')} />
        <InputPasswordText label='Password' {...register('password')} />
        <Button type='submit' category={"primary"} intent={"confirm"} label="Log In" />
      </form>
    </div>
  )
}

export default LoginPage