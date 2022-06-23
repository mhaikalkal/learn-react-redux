import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

import "./posts.css";

const PostsList = () => {
  // useSelector kan nerima state, di :: getAllPosts = (state) => state.posts
  // jadi gausah masukin param jg gpp
  const posts = useSelector(getAllPosts);

  // post baru paling atas.
  // slice() bikin array baru dari hasil yg di return.
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <p>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
