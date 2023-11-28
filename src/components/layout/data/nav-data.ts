type Info = {
	title: string;
	url: string;
	external?: boolean;
};

type DocsConfig = {
	mainNav: Info[];
	sideNav: Info[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "",
			url: "",
		},
	],
	sideNav: [
		{
			title: "Discover",
			url: "/",
		},
		{
			title: "Watch List",
			url: "/watch-list",
		},
		{
			title: "Favourite Movies",
			url: "/favourite-list",
		},
		{
			title: "Movies",
			url: "/movies",
		},
		{
			title: "TV Shows",
			url: "/tv-shows",
		},
		{
			title: "People",
			url: "/people",
		},
	],
};
