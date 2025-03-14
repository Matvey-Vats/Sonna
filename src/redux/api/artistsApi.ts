import { baseApi } from './baseApi'

export const artistsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getArtistById: builder.query({
			query: artistId => `/artist/${artistId}`,
		}),
		getTracksByArtist: builder.query({
			query: ({ artistId, limit = 10, index }) =>
				`/artist/${artistId}/top?limit=${limit}&index=${index}`,
		}),
	}),
})

export const { useGetArtistByIdQuery, useGetTracksByArtistQuery } = artistsApi
