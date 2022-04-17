import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Trending from "./components/Trending/Trending";
import Popular from "./components/Pop/Popular";
import Show from "./components/Show/Show";
import BookMarked from "./components/Book/BookMarked";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/popular" element={<Popular />}>
          Popular
        </Route>
        <Route path="/trending" element={<Trending />}>
          Trending
        </Route>
        <Route path="/shows" element={<Show />}>
          Show
        </Route>
        <Route path="bookmarked" element={<BookMarked />}>
          BookMarked
        </Route>
      </Routes>
    </div>
  );
}

export default App;
