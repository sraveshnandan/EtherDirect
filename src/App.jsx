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
            <Route path="/about" element={<h2 className="my-20 text text-white text-4xl text-center">No  page yet.</h2>} />
            <Route path="/services" element={<h2 className="my-20 text text-white text-4xl text-center">No  page yet.</h2>} />
            <Route path="/contact" element={<h2 className="my-20 text text-white text-4xl text-center">No  page yet.</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
