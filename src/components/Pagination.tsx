type PaginationProps = {
	page: number
	totalItems: number
	handleNextPage: () => void
	handlePrevPage: () => void
}

const Pagination = ({
	page,
	totalItems,
	handleNextPage,
	handlePrevPage,
}: PaginationProps) => {
	const hasNextPage = page * 20 < totalItems

	return (
		<div className='flex items-center justify-center mt-[20px] gap-x-[20px]'>
			<button
				className='text-white cursor-pointer bg-pink-600 py-[5px] px-[10px] rounded-xl disabled:bg-transparent disabled:cursor-default transition-all duration-300 hover:bg-pink-700 active:transform active:scale-95'
				onClick={handlePrevPage}
				disabled={page === 1}
			>
				Prev
			</button>
			<button
				className='text-white cursor-pointer bg-pink-600 py-[5px] px-[10px] rounded-xl disabled:bg-transparent disabled:cursor-default transition-all duration-300 hover:bg-pink-700 active:transform active:scale-95'
				onClick={handleNextPage}
				disabled={!hasNextPage}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
