import { createSlice } from "@reduxjs/toolkit";

// Temp data
import tempData from "../../assets/data/data.json";

const initialState = {
  comments: tempData.comments,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    upvoteComment: (state, action) => {
      const tempComments = state.comments.map((comment) => {
        if (comment.id === action.payload) {
          return { ...comment, score: comment.score + 1 };
        }
        return comment;
      });
      state.comments = tempComments;
    },
    downvoteComment: (state, action) => {
      const tempComments = state.comments.map((comment) => {
        if (comment.id === action.payload) {
          return { ...comment, score: comment.score - 1 };
        }
        return comment;
      });
      state.comments = tempComments;
    },
    addComment: (state, action) => {
      if (action.payload.parentCommentId !== "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.parentCommentId) {
            return {
              ...comment,
              replies: [...comment.replies, action.payload.comment],
            };
          }
          return comment;
        });
        state.comments = tempComments;
      }
      if (action.payload.parentCommentId === "") {
        state.comments.push(action.payload.comment);
      }
    },
    deleteComment: (state, action) => {},
    editComment: (state, action) => {},
  },
});

export const { upvoteComment, downvoteComment, addComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
