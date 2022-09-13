import React from "react";

// Styled Components
import { Flex, Button, Link } from "../styles/globalStyles";
import {
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
}

const Comment: React.FC<CommentProp> = ({ comment }) => {
  return (
    <CommentContainer reply={comment.isReply}>
      <CommentRating>
        <Button type="button" aria-label="plus">
          <img src={plusIcon} alt="plus" />
        </Button>
        <span>{comment.score}</span>
        <Button type="button" aria-label="minus">
          <img src={minusIcon} alt="minus" />
        </Button>
      </CommentRating>
      <CommentHeader>
        <Link href="#">
          <img src={comment.user.image.png} alt={comment.user.username} />
          <span>{comment.user.username}</span>
        </Link>
        <CommentBadge>you</CommentBadge>
        <span>{comment.createdAt}</span>
      </CommentHeader>
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
      <p>{comment.content}</p>
    </CommentContainer>
  );
};

export default Comment;
