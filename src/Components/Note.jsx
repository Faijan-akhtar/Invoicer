import React from 'react'
import sing1 from '../assets/sing1.png'
const Note = () => {
  return (
    <>
       <section className='mt-10'>
              <div className='flex justify-between'>
              <h3 className='font-bold text-green-600'>Your Vision <span className='text-yellow-500'>Our passion</span></h3>
              <img  className='h-7 ' src={sing1} alt='sing'/>
              </div>
              
              
              </section>
    </>
  )
}

export default Note
