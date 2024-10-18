
import './App.css'
import { useRef, useState } from 'react'

import  { useReactToPrint } from 'react-to-print';


import Clientdetails from './Components/Clientdetails'
import Footer from './Components/Footer'
import Maindetails from './Components/Maindetails'
import Note from './Components/Note'
import Table from './Components/Table'
import Header from './Components/Header'
import Dates from './Components/Dates'
import TableForm from './Components/TableForm'

function App() {
   const[showInvoice,setShowInvoice]=useState(false)
   
     const[name ,setName]=useState('')
     const[address ,setAddress]=useState('') 
     const[invoicenumber ,setInvoicenumber]=useState('')
     const[invoicedate ,setInvoicedate]=useState('')
     const[duedate ,setDuedate]=useState('')
     const[item,setItem]=useState('')
     const[hsnnm,setHsnnm]=useState('')
     const[quantity,setQuantity]=useState('')
     const[price,setPrice]=useState('')
     const[amount,setAmount]=useState('')
     const[list,setList]=useState([])
     const[total,setTotal]=useState(0)
    
     
     const contentRef = useRef();
     const reactToPrintFn = useReactToPrint({ contentRef });
  
    
    


 
   

  return (
    <>
        <main className='m-5 p-5 lg:max-w-4xl   md:max-w-xl md:mx-auto  lg:mx-auto  bg-white rounded shadow '>
        
     
       
        
          {showInvoice ? ( <><button  className='bg-blue-500
         text-white 
         font-bold 
         ml-5
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-blue-500 hover:text-blue-500 
         transition-all duration-300'  onClick={reactToPrintFn}>Print/Download</button>
            
            
            
            
            <div ref={contentRef} className='p-5' >
             
              <Header />
              <Maindetails/>
              <Clientdetails  name={name} address={address}/>
              <Dates invoicenumber={invoicenumber} invoicedate={invoicedate} duedate={duedate}/>
              <Table item={item} quantity={quantity}
               price={price} 
               amount={amount}
               list={list}
               total={total}
               hsnnm={hsnnm}
               
               />
              <Note/>
              <Footer/> 
              <button onClick={()=>setShowInvoice(false)}  className='bg-blue-500
         text-white 
         font-bold 
         mt-5
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-blue-500 hover:text-blue-500 
         transition-all duration-300'>Edit information</button>    
     </div></>):(
      <>

        <div className=' flex flex-col  justify-center '>
        <label htmlFor="name">Enter Customer name</label>
        <input type='text'
        id='text' 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter the your name' 
        autoComplete='off'/>
        

<label htmlFor="address">Enter customer address</label>
        <input type='text'
        id='text' 
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        placeholder='Enter customer address ' 
        autoComplete='off'/>

<label htmlFor="invoicenumber">Enter the Invoice Number</label>
        <input type='number'
        id='text' 
        value={invoicenumber}
        onChange={(e)=>setInvoicenumber(e.target.value)}
        placeholder='Enter the Invoice Number' 
        autoComplete='off'/>
 
<label htmlFor="name">Enter the Date</label>
        <input type='Date'
        id='text' 
        value={invoicedate}
        onChange={(e)=>setInvoicedate(e.target.value)}
        placeholder='Enter the Date' 
        autoComplete='off'/>
        
        <label htmlFor="name">Enter the Duedate</label>
        <input type='Date'
        id='text' 
        value={duedate}
        onChange={(e)=>setDuedate(e.target.value)}
        placeholder='Enter the Due Date' 
        autoComplete='off'/>
        
        

        {/* table */}
        <article>
          <TableForm setItem={setItem} item={item}
          setQuantity={setQuantity} quantity={quantity}
          setPrice={setPrice} price={price}
          setAmount={setAmount} amount={amount}
          setList={setList} list={list}
          setTotal={setTotal} total={total}
          setHsnnm={setHsnnm} hsnnm={hsnnm}
          
          />
        </article>




         <button onClick={()=>setShowInvoice(true)}
         className='bg-blue-500
         text-white 
         font-bold 
         mt-5
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-blue-500 hover:text-blue-500 
         transition-all duration-300'>Preview Invoice
         </button>



        </div>


     
      </>
      
     )}
       
    
         
            
         
        </main>
    </>
  )
}

export default App
