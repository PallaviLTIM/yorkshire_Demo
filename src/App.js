import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Certificate from './pages/Certificate';
import NoPage from "./pages/NoPage";
import Sidebar from "./pages/Sidebar";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  let token = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Routes>          
            <Route path="/" element={<Login />}></Route>
            <Route path="certification" element={<Sidebar />} ></Route>
            <Route path="home" element={<Sidebar />} ></Route>
            <Route path="profile" element={<Profile />} ></Route>
            <Route path="*" element={<NoPage />} ></Route>          
        </Routes>
      </BrowserRouter>
    
    {/* <div className="App">
      <Certificate></Certificate>
    </div> */}
    </>
  );
}

export default App;
