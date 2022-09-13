import React, { ChangeEvent, FormEvent, useState } from "react";

// Redux
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { addComment, editComment } from "../features/comments/commentsSlice";
import { nanoid } from "@reduxjs/toolkit";

// Styled Components
import { Button } from "../styles/globalStyles";
import {
  CommentInputContainer,
  CommentInputForm,
} from "../styles/commentInputStyles";

type CommentInputProps = {
  isEditing?: boolean;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsReplying?: React.Dispatch<React.SetStateAction<boolean>>;
  replyingTo?: string;
  parentCommentId?: string;
  commentId?: string;
  commentContent?: string;
};

const CommentInput: React.FC<CommentInputProps> = ({
  isEditing,
  setIsEditing,
  setIsReplying,
  replyingTo = "",
  parentCommentId = "",
  commentId = "",
  commentContent = "",
}) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [inputContent, setInputContent] = useState(commentContent);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isEditing) {
      const comment = {
        id: nanoid(),
        content: inputContent,
        createdAt: "now",
        score: 0,
        isReply: parentCommentId ? true : false,
        replyingTo: replyingTo,
        user: currentUser,
      };

      dispatch(addComment({ comment, parentCommentId }));
      setInputContent("");
      if (setIsReplying) setIsReplying!(false);
    }
    if (isEditing) {
      dispatch(
        editComment({
          inputContent,
          commentId,
          parentCommentId: parentCommentId === commentId ? "" : parentCommentId,
        })
      );
      setInputContent("");
      if (setIsEditing) setIsEditing!(false);
    }
  };

  return (
    <CommentInputContainer>
      <CommentInputForm onSubmit={(e) => onSubmit(e)}>
        <img src={currentUser.image.png} alt={currentUser.username} />
        <label htmlFor="comment">Your comment or reply</label>
        <textarea
          onChange={(e) => onChange(e)}
          value={inputContent}
          name="comment"
          id="comment"
          rows={4}
          placeholder="Add a comment..."
          required
        ></textarea>
        <Button type="submit" primary>
          {isEditing ? "Update" : parentCommentId ? "Reply" : "Send"}
        </Button>
      </CommentInputForm>
    </CommentInputContainer>
  );
};

export default CommentInput;
