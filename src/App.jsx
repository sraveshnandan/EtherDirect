import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Pages/HomePage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster  position="bottom-right" closeButton richColors />
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
