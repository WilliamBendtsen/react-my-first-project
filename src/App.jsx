import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";
import UserDetailPage from "./pages/UserDetailPage";
/* import ExtraPage from "./pages/ExtraPage"; */

export default function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        {/*  <Route path="/extra" element={<ExtraPage />}></Route> */}
      </Routes>
    </main>
  );
}
