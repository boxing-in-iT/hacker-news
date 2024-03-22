import React, { useEffect, useState } from "react";
import { getStories } from "../../api";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import { useAllNewsQuery } from "../../store/services/newsApi";

const NewsPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewsPage = () => {
  const { data, isFetching, error, refetch } = useAllNewsQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NewsPageContainer>
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <>
          {data.map((id) => (
            <NewsItem key={id} id={id} />
          ))}
        </>
      )}
    </NewsPageContainer>
  );
};

export default NewsPage;
