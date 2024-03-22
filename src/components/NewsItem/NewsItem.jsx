import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getStory } from "../../api";
import { useNewsByIdQuery } from "../../store/services/newsApi";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  width: 40%;
  min-height: 10em;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #888;
  font-size: 0.9rem;
`;

const NewsItem = (props) => {
  const { id } = props;
  const { data: newsItem, isFetching, error } = useNewsByIdQuery(id);
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`news/${id}`)}>
      {newsItem && (
        <CardContent>
          <Title>{newsItem.title}</Title>
          <MetaInfo>
            <span>Score: {newsItem.score}</span>
            <span>By: {newsItem.by}</span>
            <span>Time: {new Date(newsItem.time * 1000).toLocaleString()}</span>
          </MetaInfo>
        </CardContent>
      )}
    </Card>
  );
};

export default NewsItem;
