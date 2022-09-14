import React from "react";

// Styled Components
import { ModalContainer, ModalInnerContainer } from "../styles/modalStyles";
import { Button, Flex } from "../styles/globalStyles";

// Redux
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { toggleVisibility } from "../features/modal/modalSlice";
import { deleteComment } from "../features/comments/commentsSlice";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { isVisible } = useAppSelector((store) => store.modal);
  const {
    commentToDeleteData: { commentId, parentCommentId },
  } = useAppSelector((store) => store.comments);

  const handleCancel = () => {
    dispatch(toggleVisibility());
  };

  const handleDelete = () => {
    dispatch(deleteComment({ commentId, parentCommentId }));
    dispatch(toggleVisibility());
  };

  return (
    <ModalContainer isVisible={isVisible}>
      <ModalInnerContainer>
        <Flex column>
          <h1>Delete comment</h1>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <Flex>
            <Button onClick={handleCancel} primary grey type="button">
              No, cancel
            </Button>
            <Button onClick={handleDelete} primary red type="button">
              Yes, delete
            </Button>
          </Flex>
        </Flex>
      </ModalInnerContainer>
    </ModalContainer>
  );
};

export default Modal;
