import { createSlice } from "@reduxjs/toolkit";

// Temp data
import tempData from "../../assets/data/data.json";

const initialState = {
  comments: tempData.comments,
  commentToDeleteData: {
    commentId: "",
    parentCommentId: "",
  },
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    ////////////////////////////////////
    // Upvote comment
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
    ////////////////////////////////////
    // Downvote comment
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
    ////////////////////////////////////
    // Add comment
    addComment: (state, action) => {
      state.comments.push(action.payload.comment);
    },
    ////////////////////////////////////
    // Add reply
    addReply: (state, action) => {
      // get id of the comment the reply should be attached to (we have only two levels)
      let id =
        action.payload.parentCommentId !== ""
          ? action.payload.parentCommentId
          : action.payload.commentId;
      const tempComments = state.comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [...comment.replies, action.payload.comment],
          };
        }
        return comment;
      });
      state.comments = tempComments;
    },
    ////////////////////////////////////
    // Update comment to delete data
    updateCommentToDeleteData: (state, action) => {
      state.commentToDeleteData = action.payload;
    },
    ////////////////////////////////////
    // Delete comment/reply
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
    ////////////////////////////////////
    // Edit comment/reply
    editComment: (state, action) => {
      if (action.payload.parentCommentId === "") {
        const tempComments = state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            comment.content = action.payload.inputContent;
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
                reply.content = action.payload.inputContent;
              }
              return reply;
            });
          }
          return comment;
        });
        state.comments = tempComments;
      }
    },
  },
});

export const {
  upvoteComment,
  downvoteComment,
  addComment,
  addReply,
  deleteComment,
  editComment,
  updateCommentToDeleteData,
} = commentsSlice.actions;

export default commentsSlice.reducer;
