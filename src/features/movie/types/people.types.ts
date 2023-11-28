export interface People {
	adult: boolean;
	id: number;
	name: string;
	original_name: string;
	media_type: string;
	popularity: number;
	gender: number;
	known_for_department: string;
	profile_path: string;
	known_for: KnownFor[];
}

export interface KnownFor {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Person {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: any;
	deathday: any;
	gender: number;
	homepage: any;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: any;
	popularity: number;
	profile_path: string;
}
