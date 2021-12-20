import React from "react";
import { withRouter, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import "./MainNav.styles.css";
const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		backgroundColor: "#1a202c",
		zIndex: 100,
	},
});

const SimpleBottomNavigation = () => {
	const classes = useStyles();

	return (
		<div className={`${classes.root} bottom-nav-bar`}>
			<div className="nav-items">
				<Link to="/trending">
					<TrendingUpIcon fontSize="large" />
				</Link>
				<Link to="/movies">
					<MovieIcon fontSize="large" />
				</Link>
				<Link to="/tv">
					<TvIcon fontSize="large" />
				</Link>
			</div>
		</div>
	);
};

export default withRouter(SimpleBottomNavigation);
