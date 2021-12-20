import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleContent from "../components/SingleContent/SingleContent";
import "../App.css";
import dblink from "../s3";

const SinglePageContainer = () => {
	let { id } = useParams();
	const [content, setContent] = useState([]);

	const fetchData = async (dataId) => {
		await fetch(dblink)
			.then((response) => response.json())
			.then((results) => setContent(results[dataId]))
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		window.scroll(0, 0);
		fetchData(id);
	}, [id]);

	return (
		<div>
			<span className="pageTitle">{`Discover ${id}`.toUpperCase()}</span>
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
};
export default SinglePageContainer;
