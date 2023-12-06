import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* RootLayout  */}

          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
