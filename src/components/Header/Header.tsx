import { LogOut } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import SearchBlock from '../Search'

const Header: FC = () => {
	return (
		<div className='flex items-center justify-between mb-[50px]'>
			<SearchBlock />
			<div className='flex items-center gap-x-[15px] text-white'>
				<Link to='/'>Log in</Link>
				<LogOut />
			</div>
		</div>
	)
}

export default Header
