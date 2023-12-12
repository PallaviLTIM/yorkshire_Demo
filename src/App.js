import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Certificate from './pages/Certificate';
import NoPage from "./pages/NoPage";
import Sidebar from "./pages/Sidebar";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}>           */}
            <Route path="certification" element={<Sidebar />} />
            <Route index element={<Sidebar />} />
            <Route path="account" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    
    {/* <div className="App">
      <Certificate></Certificate>
    </div> */}
    </>
  );
}

export default App;
