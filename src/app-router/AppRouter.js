import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../componenets/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Details from '../pages/Details';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
