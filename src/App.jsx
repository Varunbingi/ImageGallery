import { Route, Routes } from "react-router-dom";
import "./App.css";

import Body from "./components/Body";
import Images from "./components/Images";
import SingleImage from "./components/SingleImage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}></Route>
      <Route path="/:id" element={<SingleImage />}></Route>
    </Routes>
  );
}

export default App;
