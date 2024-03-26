import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientPage from "./pages/ClientPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client" element={<ClientPage />} />
      </Routes>
    </>
  );
}

export default App;