import { Route, Routes } from "react-router-dom";
import NoMatch from "./NoMatch";
import Home from "./Home";
// import Board from "../pages/Board";
import List from "../pages/Board/List";
import Read from "../pages/Board/Read";
import Register from "../pages/Board/Register";
import Login from "../pages/Board/Login";
import Join from "../pages/Board/Join";

export default function CopyMe() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Home title="Welcome Home" />} />
      <Route path="/board" element={<List />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/read/:bid" element={<Read />} />
      <Route path="/board/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}