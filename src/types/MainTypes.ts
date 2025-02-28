export interface IGenre {
	id: number
	name: string
}

export interface IArtist {
	id: number
	name: string
	link: string
	picture_big: string
	nb_album: number
	nb_fan: number
	tracklist: string
}

export interface IAlbum {
	id: number
	title: string
	link: string
	cover_big: string
	genres: IGenre[]
	duration: number
	fans: number
	tracklist: string
	artist: IArtist
}

export interface IGenre {
	id: number
	name: string
	picture: string
}

export interface IAlbumDetail {
	id: number
	cover_big: string
	duration: number
	fans: number
	genres: IGenre[]
	label: string
	title: string
	tracklist: string
	tracks: TTracks[]
}

export type TTracks = {
	id: number
	title: string
	md5_image: string
	link: string
	preview: string
	artist: IArtist
}

export interface IPLaylist {
	id: number
	title: string
	link: string
	picture_big: string
	nb_tracks: number
	tracklist: string
}
