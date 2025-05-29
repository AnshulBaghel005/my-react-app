
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Coures from './pages/Coures';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/auth/Login';


function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/course/getCourses");
      setData(res.data.courses);
    } catch (err) {
      console.error('Error fetching data with Axios:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const freeCourse = data.filter((course) => course.category === "Free");
  const paidCourse=data.filter((course)=>course.category=='Paid');


  return (
    <>
   
    <div>
      <Routes>
        <Route path='/' element={<Home courses={freeCourse}/>}/>
        <Route path='/courses' element={<Coures free={freeCourse} paid={paidCourse}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
    

    </>
  )
}

export default App
