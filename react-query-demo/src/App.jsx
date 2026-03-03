import { useState } from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query Caching Demo</h1>

      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {showPosts && <PostsComponent />}
    </div>
  );
}

export default App;