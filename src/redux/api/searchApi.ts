import { baseApi } from './baseApi'

export const searchApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		searchQuery: builder.query({
			query: query => `search?q=${query}`,
		}),
	}),
})

export const { useSearchQueryQuery } = searchApi
