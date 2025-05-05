import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyGames from "./pages/MyGames/MyGames";
import GameDetail from "./pages/GameDetail/GameDetail";
import Favorites from "./pages/Favorites/Favorites";
import Search from "./pages/Search/Search";
import EditGame from "./pages/EditGame/EditGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Home />} /> //Fallback route 
        <Route path="/my-games" element={<MyGames />} />
        <Route path="/edit-game/:id" element={<EditGame />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;