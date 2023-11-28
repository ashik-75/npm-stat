import { useImages } from "@/store/image-sizes";
import { useEffect } from "react";
import { client } from "./api-client";

export const useGetImagesPath = () => {
	const { setUrl, url } = useImages();

	useEffect(() => {
		if (!url?.poster_w342) {
			client("configuration").then((data) => {
				const baseUrl = data?.images?.secure_base_url;
				const url = {
					backdrop_w1280: baseUrl + "w1280",
					backdrop_w780: baseUrl + "w780",
					backdrop_w300: baseUrl + "w300",
					poster_w185: baseUrl + "w185",
					poster_w342: baseUrl + "w342",
					poster_w500: baseUrl + "w500",
					poster_w780: baseUrl + "w780",
					profile: baseUrl + "w185",
				};

				setUrl(url);
			});
		}
	}, [url, setUrl]);

	return null;
};
