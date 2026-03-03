import React from "react";
import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

  const queryClient = new QueryClient();

function App() {
  
 return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query DOM Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;