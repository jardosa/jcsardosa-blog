'use client'

import React from 'react'
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@nx-nextjs-tailwind-storybook/data-access';
import InputText from 'libs/ui/src/lib/Form/Input/Input';
import InputPasswordText from 'libs/ui/src/lib/Form/Input/InputPassword';
import Button from 'libs/ui/src/lib/Button/Button';
import { notifications } from '@mantine/notifications';
import { setCookie } from 'cookies-next'

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
    watch,
  } = useForm<Login>({ resolver: zodResolver(LoginSchema), mode: 'onSubmit' });

  const [loginMutation, { loading }] = useLoginMutation({
    onCompleted(data) {
      setCookie('authToken', data.login.authToken)
      window.location.href = '/blog'
    },
    onError(err) {
      notifications.show({
        title: 'Invalid Credentials',
        message: 'Invalid Email or Password provided',
        color: 'red',
      })
    },
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    loginMutation({
      variables: { ...data },
    })
  };

  return (
    <div className='grid place-items-center h-full w-full'>
      <form onChange={() => clearErrors()} className='outline outline-1 rounded-md outline-slate-300 p-5 space-y-2' onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-2' >
          <InputText
            validationText={errors?.email?.message}
            error={errors.email?.message}
            size={'full'}
            label='Email Address'
            {...register('email')} />
          <InputPasswordText
            validationText={errors?.password?.message}
            error={errors.password?.message}
            label='Password'
            {...register('password')} />
        </div>
        {/* <div className='text-ui-red-400 text-xs'>{errors.root?.invalidCredentials.message}</div> */}
        <Button disabled={loading} type='submit' category={"primary"} intent={"confirm"} label="Log In" />
      </form>
    </div>
  )
}

export default LoginPage