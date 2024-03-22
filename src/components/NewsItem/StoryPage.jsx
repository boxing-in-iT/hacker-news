import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useNewsByIdQuery } from "../../store/services/newsApi";
import CommentItem from "../Comment/Comment";

const StoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isFetching, error } = useNewsByIdQuery(id);

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  return (
    <NewsContainer>
      <NewsLink href={data.url} target="_blank">
        Link to the news
      </NewsLink>
      <NewsTitle>{data.title}</NewsTitle>
      <NewsDate>Date: {new Date(data.time * 1000).toLocaleString()}</NewsDate>
      <NewsAuthor>Author: {data.by}</NewsAuthor>
      <CommentsCount>Comments: {data.kids?.length}</CommentsCount>
      <ReloadButton>Reload Comments</ReloadButton>
      <BackButton onClick={() => navigate(-1)}>Back to News List</BackButton>
      <CommentsList>
        {data.kids ? (
          <>
            {data.kids.map((data, index) => (
              <>
                <h2>Comment: {index + 1}</h2>
                <CommentItem id={data} />
              </>
            ))}
          </>
        ) : (
          <h1>No comment</h1>
        )}
      </CommentsList>
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const NewsLink = styled.a`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
`;

const NewsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const NewsDate = styled.div`
  font-size: 16px;
`;

const NewsAuthor = styled.div`
  font-size: 16px;
`;

const CommentsCount = styled.div`
  font-size: 16px;
`;

const CommentsList = styled.div`
  margin-top: 10px;
`;

const ReloadButton = styled.button`
  margin-top: 20px;
`;

const BackButton = styled.button`
  margin-top: 20px;
`;

export default StoryPage;
