import { Routes, Route } from 'react-router-dom';
import RecipeList from "./components/RecipeList"
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
       <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};


export default App;