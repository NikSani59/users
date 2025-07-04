import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
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
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
