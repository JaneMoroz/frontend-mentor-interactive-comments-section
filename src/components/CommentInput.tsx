import React from "react";

// Styled Components
import { Button } from "../styles/globalStyles";
import {
  CommentInputContainer,
  CommentInputForm,
} from "../styles/commentInputStyles";

// Test data
import { testData } from "../assets/data/testData";

const CommentInput = () => {
  return (
    <CommentInputContainer>
      <CommentInputForm>
        <img src={testData[0].user.image.png} alt={testData[0].user.username} />
        <label htmlFor="comment">Your comment or reply</label>
        <textarea
          name="comment"
          id="comment"
          rows={4}
          placeholder="Add a comment..."
        ></textarea>
        <Button primary type="button">
          Send
        </Button>
      </CommentInputForm>
    </CommentInputContainer>
  );
};

export default CommentInput;
