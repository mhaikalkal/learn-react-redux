import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import postsReducer from "../Features/Posts/postsSlice";
import usersReducer from "../Features/Users/usersSlice";

// jadi enaknya kita kelola 1 store aja.
const store = configureStore({
  reducer: {
    // jadi nanti di useSelector. state-nya itu 'counter' ini
    // jadi kaya key => value.
    // jadi kalo mau manggil di useSelector maka useSelector((state) => state.counter.namaStateDiDalamCounter)
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

export default store;
