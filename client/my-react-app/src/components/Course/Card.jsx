import React from 'react'

const Card = ({data}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl  ">
  <figure>
    <img
      src={data.img}
      alt="Coures" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between'>
    <h2 className="card-title">{data.courseName}</h2>
    <div className='badge badge-secondary font-semibold py-4 px-6'>{data.category}</div>
    </div>
    <p>{data.title}</p>
    <div>
 {data.category=="Paid"  &&
    <div className="card-actions justify-around">
      
        <div className='flex justify-center items-center border border-2 border-orange-500 rounded-2xl'>
            <h4 className='text-red-500 text-xl px-3 '>{data.price}</h4>
        </div>
        <div>
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
}
   
        
        
      
    </div>
  </div>
</div>
  )
}

export default Card