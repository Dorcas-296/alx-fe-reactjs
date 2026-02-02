import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],           // <-- must be initialized
  filteredRecipes: [],   // <-- optional for search
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const { recipes } = get();
    set({
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      ),
    });
  },

  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;