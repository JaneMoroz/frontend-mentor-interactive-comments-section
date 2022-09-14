import React from "react";

// Styled Components
import { ModalContainer, ModalInnerContainer } from "../styles/modalStyles";
import { Button, Flex } from "../styles/globalStyles";

const Modal = () => {
  return (
    <ModalContainer>
      <ModalInnerContainer>
        <Flex column>
          <h1>Delete comment</h1>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <Flex>
            <Button primary grey type="button">
              No, cancel
            </Button>
            <Button primary red type="button">
              Yes, delete
            </Button>
          </Flex>
        </Flex>
      </ModalInnerContainer>
    </ModalContainer>
  );
};

export default Modal;
