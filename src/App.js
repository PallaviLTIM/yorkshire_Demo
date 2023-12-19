import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Certificate from './pages/Certificate';
import NoPage from "./pages/NoPage";
// import Sidebar from "./pages/Sidebar";
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useSelector } from "react-redux";
import { selectUser } from "./store/reducers/common-reducers";

function App() {
  const user = useSelector((state) => state.user);

  let token = localStorage.getItem('token');
  // console.log('app',isLoggedin)
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="certification" element={<Certificate />} ></Route>
          <Route path="home" element={<Home />} ></Route>
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
