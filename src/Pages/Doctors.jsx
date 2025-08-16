import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Doctors = () => {
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>All Doctors</h1>
      <p className='sm:w-1/3 text-center text-sm'>Browse through our complete list of trusted doctors.</p>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.map((item, index) => (
          <div 
            onClick={() => navigate(`/appointment/${item._id}`)} 
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 h-full' 
            key={index}
          >
            <img className='w-full h-56 sm:h-60 md:h-64 object-cover object-center bg-blue-50' src={item.image} alt={item.name} /> 
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p> 
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
              <p className='text-gray-500 text-xs mt-1'>{item.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors
