import { AnimatePresence } from "framer-motion";
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
    <AnimatePresence mode="wait">
      <Flex column marginBottom>
        {comments.map((comment) => {
          const { id, content, createdAt, score, user } = comment;
          return (
            <Flex column alignEnd fullWidth key={id}>
              <Comment comment={{ id, content, createdAt, score, user }} />
              {comment.replies?.map((reply) => {
                const { id, content, createdAt, score, replyingTo, user } =
                  reply;
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
                    parentCommentId={comment.id}
                  />
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </AnimatePresence>
  );
};

export default Comments;
