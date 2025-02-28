import { LogOut } from 'lucide-react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/slices/authSlice'
import { AppDispatch, RootState } from '../../redux/store'
import SearchBlock from '../Search'

const Header: FC = () => {
	const user = useSelector((state: RootState) => state.auth.user)
	const dispatch = useDispatch<AppDispatch>()
	return (
		<div className='flex items-center justify-between gap-x-5 mb-[50px]'>
			<SearchBlock />
			<div className='flex items-center gap-x-[15px] w-[200px] text-white'>
				{user ? (
					<button
						className='cursor-pointer'
						onClick={() => dispatch(logoutUser())}
					>
						<LogOut />
					</button>
				) : (
					<>
						<Link to='login'>Log in</Link>
						<Link to='register'>Sign up</Link>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
