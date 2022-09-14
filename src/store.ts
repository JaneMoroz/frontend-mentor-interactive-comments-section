import { configureStore } from "@reduxjs/toolkit";

// Slices
import userSlice from "./features/user/userSlice";
import commentsSlice from "./features/comments/commentsSlice";
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    comments: commentsSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
