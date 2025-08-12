import React, { useContext,useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets'

function Doctors() {
  
  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const {doctors}= useContext(AppContext)
  
  const applyFilter = ()=>{
    if(speciality){
       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  const handleFilterClick = (selectedSpeciality) => {
    if(selectedSpeciality === speciality) {
      navigate('/doctors')
    } else {
      navigate(`/doctors/${selectedSpeciality}`)
    }
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Main Content */}
      <div className='px-6 md:px-10 lg:px-20 py-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-8'>Browse through the doctors specialist.</h2>
        
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Sidebar - Filters */}
          <div className='lg:w-64 flex-shrink-0'>
            <div className='flex flex-col gap-3'>
              <button 
                onClick={() => handleFilterClick('General physician')} 
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                  speciality === 'General physician' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                General physician
              </button>
              <button 
                onClick={() => handleFilterClick('Gynecologist')} 
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                  speciality === 'Gynecologist' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Gynecologist
              </button>
              <button 
                onClick={() => handleFilterClick('Dermatologist')} 
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                  speciality === 'Dermatologist' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Dermatologist
              </button>
              <button 
                onClick={() => handleFilterClick('Pediatricians')} 
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                  speciality === 'Pediatricians' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Pediatricians
              </button>
              <button 
                onClick={() => handleFilterClick('Neurologist')} 
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                  speciality === 'Neurologist' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Neurologist
              </button>
              <button 
                onClick={() => handleFilterClick('Gastroenterologist')} 
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer ${
                  speciality === 'Gastroenterologist' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Gastroenterologist
              </button>
            </div>
          </div>

          {/* Right Side - Doctor Cards Grid */}
          <div className='flex-1'>
            {filterDoc.length === 0 ? (
              <div className='text-center py-12'>
                <p className='text-gray-500 text-lg'>No doctors found for this specialty.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {filterDoc.map((item, index) => (
                  <div 
                    onClick={() => navigate(`/appointment/${item._id}`)} 
                    className='bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 h-full' 
                    key={index}
                  >
                    <img 
                      className='w-full h-48 object-cover object-center bg-gray-100' 
                      src={item.image} 
                      alt={item.name} 
                    /> 
                    <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-green-600 mb-2'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <span>Available</span>
                      </div>
                      <h3 className='text-gray-900 text-lg font-semibold mb-1'>{item.name}</h3>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
