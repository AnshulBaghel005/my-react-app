import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/Navbar'
import Couresess from '../components/Course/Couresess'

const Home = ({courses}) => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div>
        <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-500 text-transparent bg-clip-text">
          Explore Free Courses
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Learn new skills with our high-quality, free learning resources.
        </p>
      </div>

      </div>
       <Couresess free={courses}/>
      <Footer/>
     
    </div>
  )
}

export default Home