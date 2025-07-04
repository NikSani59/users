import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
