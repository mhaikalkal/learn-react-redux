import { useSelector } from "react-redux";
import { getAllUsers } from "../Users/usersSlice";
import React from "react";

const PostAuthor = (props) => {
  const users = useSelector(getAllUsers);
  const author = users.find((user) => user.id == props.userId);

  return <span>by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
