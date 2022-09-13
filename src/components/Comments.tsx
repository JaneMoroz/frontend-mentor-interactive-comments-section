import React from "react";
// Redux
import { useAppSelector } from "../hooks/useRedux";

// Styled components
import { Flex } from "../styles/globalStyles";

// Components
import { Comment } from "./index";

const Comments = () => {
  const { comments } = useAppSelector((state) => state.comments);
  return (
    <Flex column>
      {comments.map((comment) => {
        const { id, content, createdAt, score, user } = comment;
        return (
          <Flex column alignEnd fullWidth key={id}>
            <Comment comment={{ id, content, createdAt, score, user }} />
            {comment.replies?.map((reply) => {
              const { id, content, createdAt, score, replyingTo, user } = reply;
              return (
                <Comment
                  key={id}
                  comment={{
                    id,
                    content,
                    createdAt,
                    score,
                    replyingTo,
                    user,
                    isReply: true,
                  }}
                />
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Comments;
