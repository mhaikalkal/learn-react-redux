import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "./postsSlice"; // ini action dari postsSlice
import { getAllUsers } from "../Users/usersSlice";

import React from "react";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);

  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      // laksanakan aksi addPost, yg task/isinya object{id,title,content}
      //
      // dispatch(
      //   addPost({
      //     id: nanoid(),
      //     title,
      //     content,
      //   })
      // );

      // karena isi addPost: reducer(state, action), prepare(param1, param2). (param di kasus ini == title & content)
      // jadi sewaktu kita dispatch(addPost(title, content));
      // kita execute method prepare(title, content). lalu dia return payload lalu execute callback method reducer. jadi si payload langsung dikirimke reducer
      dispatch(addPost(title, content, userId));

      setTitle("");
      setUserId("");
      setContent("");
    }
  };

  // kalo form udah diisi, button baru bisa di click
  const validData = title && content && userId;

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option></option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />

        <button type="button" onClick={onSavePostClicked} disabled={!validData}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
