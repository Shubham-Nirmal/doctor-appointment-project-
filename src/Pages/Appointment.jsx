import React, { useContext, useState,  useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../Componats/RelatedDoctors'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors, currencySymbols} = useContext(AppContext) 
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
       const docInfo = doctors.find(doc => doc._id === docId)
       setDocInfo(docInfo)
  }
 
  const getAvailableSlots = async () => {
       setDocSlots([])

       // getting current date
       let today = new Date()

       for (let i = 0; i < 7; i++){
          // getting date with index 
          let currentDate = new Date(today)
          currentDate.setDate(today.getDate() + i)
          
          //setting end time of slot
          let endTime = new Date(currentDate)
          endTime.setHours(21, 0, 0, 0)

          //setting hours of slot
          if(i === 0){
            // Today - start from current time + 1 hour
            currentDate.setHours(currentDate.getHours() + 1)
            currentDate.setMinutes(0)
          } else {
            // Future days - start from 10 AM
            currentDate.setHours(10, 0, 0, 0)
          }

          let timeSlot = []
          while (currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

            // add slot to array
            timeSlot.push({
              datetime: new Date(currentDate),
              time: formattedTime
            })

            // increment current time by 30 minutes
            currentDate.setMinutes(currentDate.getMinutes() + 30)
          }

          setDocSlots(prev => [...prev, {
            date: new Date(currentDate),
            dayName: dayOfWeek[currentDate.getDay()],
            dayDate: currentDate.getDate(),
            slots: timeSlot
          }])
       }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])

  if (!docInfo) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div>
      {/* Doctor Details  */}
      <div className='flex flex-col sm:flex-row gap-4 '>
        <div>
              <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* Doc info : name, degree, experience,  */}
              <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                {docInfo.name} 
                <img className='w-5'  src={assets.verified_icon} alt="verified" /> 
               </p>
               <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                  <p>{docInfo.degree} - {docInfo.speciality}</p>
                  <button>{docInfo.experience}</button>
               </div>
               {/* Doctor About  */}

               <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="info" /></p>
                <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
               </div>
                <p className='text-gray-600 font-medium mt-4'>
                  Appointment fee: <span className='text-gray-600 '>{currencySymbols}{docInfo.fees}</span></p>
        </div>
      </div>
      
      {/* Booking slots  */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
              <p>Booking Slots</p>
              <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
                {
                  docSlots.length > 0 && docSlots.map((item, index) => (
                   <div 
                     onClick={() => setSlotIndex(index)} 
                     className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-400 text-white': 'border border-gray-200'}`} 
                     key={index}
                   >
                    <p>{item.dayName}</p>
                    <p>{item.dayDate}</p>
                   </div>
                  ))
                }
              </div>

              <div className='flex items-center gap-3 w-full overflow-x-scroll m-4'>
               {
                docSlots.length > 0 && docSlots[slotIndex] && docSlots[slotIndex].slots && docSlots[slotIndex].slots.map((item, index) => (
                 <p 
                   onClick={() => setSlotTime(item.time)} 
                   className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-400 text-white': 'border border-gray-300'}`} 
                   key={index}
                 >
                    {item.time.toLowerCase()}
                 </p> 
                ))
               }
              </div>
              <button className='bg-blue-400 text-white text-sm font-light px-14 py-3 rounded-full'>Book an appointment</button> 
      </div>
               {/* Listing Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  )
}

export default Appointment
