import { LogOut, Search } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
	return (
		<div className='flex items-center justify-between mb-[50px]'>
			<div className='flex items-center gap-x-[10px] w-[400px]'>
				<input
					className='w-full px-[10px] py-[5px] rounded-xl border-1 border-[#c77dff] text-white outline-0'
					type='text'
					placeholder='Enter your track...'
				/>
				<button>
					<Search className='cursor-pointer' color='#c77dff' />
				</button>
			</div>
			<div className='flex items-center gap-x-[15px] text-white'>
				<Link to='/'>Log in</Link>
				<LogOut />
			</div>
		</div>
	)
}

export default Header
