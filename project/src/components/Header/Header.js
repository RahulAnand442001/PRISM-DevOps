import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<StyledHeader onClick={() => window.scroll(0, 0)}>
			🎬 MOVIE STORM 🎥
		</StyledHeader>
	);
}
const StyledHeader = styled.span`
	width: 100%;
	height: 10vh;
	cursor: pointer;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	background-color: #1a202c;
	font-family: "Montserrat", sans-serif;
	font-size: 2vw;
	box-shadow: 0px 1px 5px black;
	color: white;
	z-index: 100;
	@media (max-width: 768px) {
		font-size: 6.4vw;
	}
`;
export default Header;
