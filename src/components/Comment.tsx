import React, { useState } from "react";

// Redux
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import {
  upvoteComment,
  downvoteComment,
} from "../features/comments/commentsSlice";

// Components
import CommentInput from "./CommentInput";

// Styled Components
import { Flex, Button, Link } from "../styles/globalStyles";
import {
  CommentSection,
  CommentContainer,
  CommentRating,
  CommentHeader,
  CommentBadge,
} from "../styles/commentStyles";

// Icons
import {
  minusIcon,
  plusIcon,
  replyIcon,
  deleteIcon,
  editIcon,
} from "../assets/icons";

// Interfaces
import IComment from "../interfaces/IComment";

interface CommentProp {
  comment: IComment;
  parentCommentId?: string;
}

const Comment: React.FC<CommentProp> = ({ comment, parentCommentId = "" }) => {
  const { currentUser } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const [isReplying, setIsReplying] = useState(false);

  return (
    <CommentSection reply={comment.isReply}>
      <CommentContainer>
        <CommentRating>
          <Button
            onClick={() =>
              dispatch(
                upvoteComment({
                  commentId: comment.id,
                  parentCommentId,
                })
              )
            }
            type="button"
            aria-label="plus"
          >
            <img src={plusIcon} alt="plus" />
          </Button>
          <span>{comment.score}</span>
          <Button
            onClick={() =>
              dispatch(
                downvoteComment({
                  commentId: comment.id,
                  parentCommentId,
                })
              )
            }
            type="button"
            aria-label="minus"
          >
            <img src={minusIcon} alt="minus" />
          </Button>
        </CommentRating>
        <CommentHeader>
          <Link href="#">
            <img src={comment.user.image.png} alt={comment.user.username} />
            <span>{comment.user.username}</span>
          </Link>
          {/* if comment belongs to the currentUser => add a badge "you" */}
          {comment.user.username === currentUser.username && (
            <CommentBadge>you</CommentBadge>
          )}
          <span>{comment.createdAt}</span>
        </CommentHeader>
        {/* if comment belongs to the currentUser */}
        {comment.user.username === currentUser.username && (
          <Flex buttonsContainer>
            <Button textWithIcon delete type="button">
              <img src={deleteIcon} alt="delete" />
              <span>Delete</span>
            </Button>
            <Button textWithIcon type="button">
              <img src={editIcon} alt="edit" />
              <span>Edit</span>
            </Button>
          </Flex>
        )}
        {/* if comment does NOT belong to the currentUser */}
        {comment.user.username !== currentUser.username && (
          <Flex buttonsContainer>
            <Button
              onClick={() => setIsReplying(!isReplying)}
              textWithIcon
              type="button"
            >
              <img src={replyIcon} alt="reply" />
              <span>Reply</span>
            </Button>
          </Flex>
        )}
        <p>
          {comment.replyingTo && <span>@{comment.replyingTo} </span>}
          {comment.content}
        </p>
      </CommentContainer>
      {isReplying && (
        <CommentInput
          setIsReplying={setIsReplying}
          replyingTo={comment.user.username}
          parentCommentId={comment.id}
        />
      )}
    </CommentSection>
  );
};

export default Comment;
