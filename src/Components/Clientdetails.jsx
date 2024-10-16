import React from 'react'

const Clientdetails = ({name,address}) => {
  return (
    <>
       <section className='mb-5'>
            <h2 className='text-xl font-bold uppercase'>{name}</h2>
            <p className='font-medium'>{address}</p>

          </section>
    </>
  )
}

export default Clientdetails
