import { LoginDocument, LoginMutation, LoginMutationVariables, WhoAmIDocument, WhoAmIQuery, WhoAmIQueryVariables, useLoginMutation, useWhoAmIQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { createFileRoute, redirect } from '@tanstack/react-router'
import z from 'zod'
import { SubmitHandler, useForm, } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { setCookie, getCookie } from 'cookies-next'
import { notifications } from '@mantine/notifications';
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import request from 'graphql-request';


const fallback = '/posts'
export const Route = createFileRoute('/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: async ({ context, search }) => {
    const authToken = getCookie('authToken')

    if (authToken) {

      const res = await request<WhoAmIQuery, WhoAmIQueryVariables>(
        {
          document: WhoAmIDocument,
          url: import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
          requestHeaders: {
            authorization: `Bearer ${authToken}`
          }
        }
      )
      if (res.whoAmI) {
        throw redirect({ to: search.redirect || fallback })
      }
    }
  },
  component: () => <LoginComponent />,

})


const LoginSchema = z.object({
  email: z.string().min(1, { message: 'Email Required' }).email(),
  password: z.string().min(1, { message: 'Password Required' }),
});

type Login = z.infer<typeof LoginSchema>;

const LoginComponent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<Login>({ resolver: zodResolver(LoginSchema), mode: 'onSubmit' });
  const search = Route.useSearch()
  const navigate = Route.useNavigate()

  const onSubmit: SubmitHandler<Login> = async (data) => {


    try {
      const res = await request<LoginMutation, LoginMutationVariables>({
        url: import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
        document: LoginDocument,
        variables: { email: data.email, password: data.password }
      })
      if (res.login.authToken) {
        setCookie('authToken', res.login.authToken)
        await navigate({ to: search.redirect || fallback })
      }
    } catch (error) {
      console.log({ error })
      notifications.show({
        title: 'Invalid Credentials',
        message: 'Invalid Email or Password provided',
        color: 'red',
      })
    }

  };

  return (
    <div className='grid place-items-center h-full w-full'>
      <form onChange={() => clearErrors()} className='outline outline-1 rounded-md outline-slate-300 p-5 space-y-2' onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-2' >
          <Input
            error={errors.email?.message}
            size={'full'}
            placeholder='Email Address'
            {...register('email')} />
          <Input
            type='password'
            error={errors.password?.message}
            placeholder='Password'
            {...register('password')} />
        </div>
        {/* <div className='text-ui-red-400 text-xs'>{errors.root?.invalidCredentials.message}</div> */}
        <Button disabled={isSubmitting} type='submit' fullWidth>
          Log In
        </Button>
      </form>
    </div>
  )
}