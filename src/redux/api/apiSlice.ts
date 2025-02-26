import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
	endpoints: builder => ({
		getTopCharts: builder.query({
			query: () => '/editorial/0/charts/',
		}),
		getReleases: builder.query({
			query: (page = 1) => `editorial/0/releases?index=${(page - 1) * 20}`,
		}),
		getTracksByAlbumId: builder.query({
			query: (albumId = 212377) => `album/${albumId}/tracks`,
		}),
		getAlbumById: builder.query({
			query: albumId => `/album/${albumId}`,
		}),
		getArtistById: builder.query({
			query: artistId => `/artist/${artistId}`,
		}),
		getTracksByArtist: builder.query({
			query: ({ artistId, limit = 10, index }) =>
				`/artist/${artistId}/top?limit=${limit}&index=${index}`,
		}),
		getPlayListById: builder.query({
			query: playlistId => `/playlist/${playlistId}/`,
		}),
		getTracksByPlaylist: builder.query({
			query: ({ playlistId, limit = 10, index }) =>
				`/playlist/${playlistId}/tracks?index=${index}&limit=${limit}`,
		}),
		searchQuery: builder.query({
			query: query => `search?q=${query}`,
		}),
	}),
})

export const {
	useGetTopChartsQuery,
	useGetReleasesQuery,
	useGetTracksByAlbumIdQuery,
	useGetAlbumByIdQuery,
	useGetArtistByIdQuery,
	useGetTracksByArtistQuery,
	useGetPlayListByIdQuery,
	useGetTracksByPlaylistQuery,
	useSearchQueryQuery,
} = apiSlice
export default apiSlice
