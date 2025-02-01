import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import FacultyAndStaff from './Pages/FacultyAndStaff';
import Academics from './Pages/Academics';
import Galleries from './Pages/Galleries';
import NewsAndUpdates from './Pages/NewsAndUpdates';
import ContactUs from './Pages/ContactUs';
import RegistrationForm from './Pages/RegistrationForm.jsx';
import SamplePaper from './Pages/SamplePaper.jsx';
import Uniform from './Pages/Uniform.jsx';
import StudentTimeTable from './Pages/StudentTimeTable.jsx';
import MiniNavbar from './components/Mininavbar.jsx';
import Loader from './components/Loader.jsx';
import NotFound from './components/404'; // Import the 404 page component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulating data loading time

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<FacultyAndStaff />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/news" element={<NewsAndUpdates />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/samplepaper" element={<SamplePaper />} />
        <Route path="/uniform" element={<Uniform />} />
        <Route path="/studenttimetable" element={<StudentTimeTable />} />
        <Route path="*" element={<NotFound />} /> {/* Add the 404 page route */}
      </Route>
    )
  );

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Header />
        <MiniNavbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
