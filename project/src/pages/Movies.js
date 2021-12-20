import React, { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import "../App.css";
import dblink from "../s3"

function Movies() {
	const [content, setContent] = useState([]);

	const fetchMovies = async () => {
		await fetch(dblink)
			.then((response) => response.json())
			.then((results) => setContent(results.movies))
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		window.scroll(0, 0);
		fetchMovies();
	}, []);

	return (
		<div>
			<span className="pageTitle">Discover Movies</span>
			<div className="trending">
				{content &&
					content.map((c) => (
						<SingleContent
							key={c.id}
							id={c.id}
							poster={c.poster_path}
							title={c.title || c.name}
							date={c.first_air_date || c.release_date}
							media_type={c.media_type}
							vote_average={c.vote_average}
						/>
					))}
			</div>
		</div>
	);
}
export default Movies;
