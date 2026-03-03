
import { useQuery } from "@tanstack/react-query"

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  };
   const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {isFetching && <p>Updating...</p>}

      {data.slice(0, 5).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px"
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent