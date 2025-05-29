import React from 'react'
import Couresess from '../components/Course/Couresess'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar/Navbar'

const Coures = ({free,paid}) => {
   
  return (
    <div>
      <Navbar/>
     <Couresess free={free} paid={paid}/>
     
    </div>
  )
}

export default Coures