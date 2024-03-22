import React, { useState } from "react";
import { useGetCommentQuery } from "../../store/services/newsApi";
import styled from "styled-components";

const CommentItem = ({ isShowing = false, id }) => {
  const { data, isLoading, isError } = useGetCommentQuery(id);
  const [showReplies, setShowReplies] = useState(false);

  if (!isShowing) {
    return null;
  }

  if (isLoading) {
    return <div>Loading comment...</div>;
  }

  if (isError) {
    return <div>Error loading comment</div>;
  }

  return (
    <CommentContainer>
      <CommentAuthor>Author: {data.by}</CommentAuthor>
      <CommentDate>
        Date: {new Date(data.time * 1000).toLocaleString()}
      </CommentDate>
      <CommentText
        dangerouslySetInnerHTML={{ __html: data.text }}
        onClick={() => setShowReplies((prev) => !prev)}
      />
      {data.kids && (
        <ReplyComments>
          <b>{data.kids.length} replies</b>
          {data.kids.map((replyId) => (
            <CommentItem key={replyId} isShowing={showReplies} id={replyId} />
          ))}
        </ReplyComments>
      )}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const CommentAuthor = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CommentDate = styled.div`
  font-size: 14px;
  color: gray;
`;

const CommentText = styled.div`
  font-size: 14px;
`;

const ReplyComments = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

export default CommentItem;
