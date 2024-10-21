import React from 'react'

const Header = ({handlePrint}) => {



  return (
    <>
         <header className='flex flex-col items-center justify-center mb-5 lg:flex-row lg:justify-between'>
            <div>
              <h1 className='font-bold uppercase tracking-wide text-4xl mb-3'>Invoice</h1>
            </div>
            {/* <div>
              <ul className='flex items-center justify-between flex-wrap'>
                <button  className='bg-gray-500
         text-white 
         font-bold 
        
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-gray-500 hover:text-gray-500 
         transition-all duration-300' onClick={handlePrint}>print</button>
                <li className='mx-2'><button  className='bg-green-500
         text-white 
         font-bold 
        
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-green-500 hover:text-green-500 
         transition-all duration-300'>Download</button></li>
                <li><button  className='bg-blue-500
         text-white 
         font-bold 
        
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-blue-500 hover:text-blue-500 
         transition-all duration-300'>send</button></li>
              </ul>
            </div> */}
          </header>
    </>
  )
}

export default Header
