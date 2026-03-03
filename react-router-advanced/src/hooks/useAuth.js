import { useState } from "react";

function useAuth() {
  const [isAuthenticated] = useState(false); 

  return { isAuthenticated };
}

export default useAuth;