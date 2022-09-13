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
      if (action.payload.parentCommentId === "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            comment.score += 1;
          }
          return comment;
        });
        state.comments = tempComments;
      }
      if (action.payload.parentCommentId !== "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.parentCommentId) {
            comment.replies.map((reply) => {
              if (reply.id === action.payload.commentId) {
                reply.score += 1;
              }
              return reply;
            });
          }
          return comment;
        });
        state.comments = tempComments;
      }
    },
    downvoteComment: (state, action) => {
      if (action.payload.parentCommentId === "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            comment.score -= 1;
          }
          return comment;
        });
        state.comments = tempComments;
      }
      if (action.payload.parentCommentId !== "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.parentCommentId) {
            comment.replies.map((reply) => {
              if (reply.id === action.payload.commentId) {
                reply.score -= 1;
              }
              return reply;
            });
          }
          return comment;
        });
        state.comments = tempComments;
      }
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
    deleteComment: (state, action) => {
      if (action.payload.parentCommentId !== "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.parentCommentId) {
            const tempReplies = comment.replies.filter(
              (reply) => reply.id !== action.payload.commentId
            );
            comment.replies = tempReplies;
          }
          return comment;
        });
        state.comments = tempComments;
      }
      if (action.payload.parentCommentId === "") {
        const tempComments = state.comments.filter(
          (comment) => comment.id !== action.payload.commentId
        );
        state.comments = tempComments;
      }
    },
    editComment: (state, action) => {},
  },
});

export const { upvoteComment, downvoteComment, addComment, deleteComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
