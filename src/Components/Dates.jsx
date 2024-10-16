import React from 'react'

const Dates = ({invoicenumber,invoicedate,duedate}) => {
  return (
    <>
       <article className=' m-6 mb-10 flex items-end justify-end' >
            <ul >
              <li className='p-1 text-red-700'> 
                  <span className='font-bold'>invoice number : </span>{invoicenumber} </li>
              <li className='bg-gray-100 p-1  text-red-700'>
                <span className='font-bold mt-5 mb-5'>invioce date : </span>{invoicedate}</li>
              <li className='p-1  text-red-700'>
                <span className='font-bold'>due date : </span>{duedate}</li>
              </ul>
              </article>
    </>
  )
}

export default Dates
