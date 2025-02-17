import { useOverlayStore } from "./hooks/overlayStore";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Invest from "./pages/Invest";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function App() {
  const { isOverlayOpen } = useOverlayStore();
  return (
    <BrowserRouter>
      {isOverlayOpen && (
        <div className="w-full absolute inset-0 bottom-0 top-0 h-[100%] bg-black/70"></div>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
