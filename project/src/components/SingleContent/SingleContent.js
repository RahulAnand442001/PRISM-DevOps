import React from 'react';
import { Badge } from '@material-ui/core';
import { img_300, unavailable } from '../../config/config';
import styled from 'styled-components';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <Media>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? 'primary' : 'secondary'}
      />
      <Poster src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
      <Title>{title}</Title>
      <SubTitle>
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
        <span className="subTitle">{date}</span>
      </SubTitle>
    </Media>
  );
};
const Media = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;
  margin: 5px 0;
  background-color: #1a202c;
  border-radius: 10px;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    /* transform: scale(1.08); */
  }
  @media (max-width: 550px) {
    width: 46%;
  }
`;
const Poster = styled.img`
  border-radius: 10px;
`;
const Title = styled.b`
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
`;
const SubTitle = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
`;
export default SingleContent;
