import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import RecipeDetail from './Recipe_Detail.tsx';
import RecipeMain from './Recipe_Main.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={<RecipeMain />}
      />
      <Route
        path="/recipe/:id"
        element={<RecipeDetail />}
      />
    </Routes>
  </Router>
);
