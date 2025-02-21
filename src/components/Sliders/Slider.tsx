import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

interface SliderProps<T> {
	items: T[]
	renderItem: (item: T) => ReactNode
}

const Slider = <T,>({ items, renderItem }: SliderProps<T>) => {
	return (
		<div className='max-w-[1200px]'>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				breakpoints={{
					1392: { slidesPerView: 4, spaceBetween: 70 },
					768: { slidesPerView: 3, spaceBetween: 0 },
					640: { slidesPerView: 2, spaceBetween: 0 },
					0: { slidesPerView: 1, spaceBetween: 5 },
				}}
				pagination={{ clickable: true }}
				className='w-[1200px] flex justify-between'
			>
				{items.map(item => (
					<SwiperSlide key={(item as any).id} className='max-w-[250px]'>
						{renderItem(item)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
