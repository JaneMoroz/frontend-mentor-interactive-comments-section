import { configureStore } from "@reduxjs/toolkit";

// Slices
import userSlice from "./features/user/userSlice";
import commentsSlice from "./features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
