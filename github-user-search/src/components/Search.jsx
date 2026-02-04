import { useState } from "react";
import { fetchUserData } from "../services/githubService";
const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.perventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
       const data = await fetchUserData(username);
       setUserData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Github Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we can't find the user</p>}

      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.name}
            width='100'
          />
          <h3>{userData.name || userData.login}</h3>
          <a
            href={userData.html_url}
            target='_blank'
            rel='noopener noreferrer'
          >
              View Github Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

  
