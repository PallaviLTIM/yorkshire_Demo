import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Certificate from './pages/Certificate';
import NoPage from "./pages/NoPage";
import Sidebar from "./pages/Sidebar";
import Home from './pages/Home';
import Profile from './pages/Profile';
import DataTable from "./pages/Certificate-List";

function App() {
  let token = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}>           */}
            <Route path="certification" element={<Certificate />} />
            <Route index element={<Sidebar />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
            <Route path='/certificate-list' element={<DataTable/>}/>
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
