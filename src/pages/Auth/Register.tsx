import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { loginWithGoogle, registerUser } from '../../redux/slices/authSlice'
import { AppDispatch, RootState } from '../../redux/store'

type FieldsTypes = {
	email: string
	password: string
}

const Register: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldsTypes>()
	const dispatch = useDispatch<AppDispatch>()
	const { loading, error } = useSelector((state: RootState) => state.auth)

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<FieldsTypes> = data => {
		const userData = {
			email: data.email,
			password: data.password,
		}
		dispatch(registerUser(userData))
		navigate('/')
	}

	const handleLoginWithGoogle = () => {
		dispatch(loginWithGoogle())
	}

	return (
		<div className='flex items-center justify-center mt-50'>
			<div>
				<h2 className='text-white font-bold text-3xl mb-5'>Sign up</h2>
				{error && (
					<p className='text-white text-center p-2 bg-red-400 rounded-md mb-3'>
						Wrong email or password
					</p>
				)}
				{loading ? (
					<div className='flex items-center justify-center mt-25'>
						<Spinner />
					</div>
				) : (
					<div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='text-white flex flex-col items-start w-[400px]'
						>
							<input
								className='border-b-2 border-[#e0aaff] p-2 outline-0 w-full'
								type='email'
								placeholder='Enter your email: '
								{...register('email', { required: 'Email is required' })}
							/>
							{errors.email && (
								<p className='text-red-400'>{errors.email.message}</p>
							)}
							<input
								className='border-b-2 border-[#e0aaff] p-2 outline-0 w-full mt-5'
								type='password'
								placeholder='Enter your password: '
								{...register('password', { required: 'Password is required' })}
							/>
							{errors.password && (
								<p className='text-red-400'>{errors.password.message}</p>
							)}
							<button
								type='submit'
								className='mt-5 bg-[#e0aaff] text-[#11001c] border-1 border-transparent rounded-md w-[100px] h-[35px] font-bold transition-all duration-800 hover:bg-transparent hover:border-[#e0aaff] hover:text-[#e0aaff] active:scale-95'
							>
								Sign up
							</button>
						</form>
						<button
							onClick={handleLoginWithGoogle}
							className='flex items-center mx-auto px-7 py-2 mt-7 cursor-pointer'
						>
							<img
								src='/google-icon.svg'
								alt='google'
								className='w-[30px] mr-5'
							/>
							<p className='text-white'>Login with google</p>
						</button>
						<div className='text-white text-center mt-5'>
							<p className='font-medium'>
								Are you{' '}
								<Link
									className='text-[#e0aaff] font-bold transition-all duration-300 hover:opacity-70'
									to='/login'
								>
									registered
								</Link>{' '}
								yet?
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Register
