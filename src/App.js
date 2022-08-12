
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Popular from "./pages/Popular";
import Cuisine from "./pages/Cuisine";
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import {AnimatePresence} from 'framer-motion';





function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/recipes" element={<Recipes/>}/> */}
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/Recipe/:name" element={<Recipe/>}/>
        </Routes>
        </AnimatePresence>
      <Footer/>
    </Router>

  );
}

export default App;
