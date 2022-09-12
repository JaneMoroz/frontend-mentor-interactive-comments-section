import React from "react";

// Styled components
import { Flex } from "../styles/globalStyles";

// Components
import { Comment } from "./index";

// Test data
import { testData } from "../assets/data/testData";

const Comments = () => {
  return (
    <Flex column>
      {testData.map((comment) => {
        const { id, content, createdAt, score, user } = comment;
        return (
          <Flex column alignEnd key={id}>
            <Comment comment={{ id, content, createdAt, score, user }} />
            {comment.replies.map((reply) => {
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
