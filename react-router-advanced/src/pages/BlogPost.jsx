import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is a dynamically routed blog post page.</p>
    </div>
  );
}