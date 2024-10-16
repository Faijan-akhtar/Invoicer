import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
const TableForm = 
({
    item,
    quantity
    ,price
    ,amount
    ,setItem
    ,setQuantity
    ,setPrice
    ,setAmount
    ,list
    ,setList
    ,setTotal
    ,total

}) => 
    {
      const handleSubmit=(e)=>{
        e.preventDefault()

      if(!item ||!quantity || !price || !amount){
 alert('please fill all fields')

      } else{
        const newItems={
          id:uuidv4(),
          item,
          quantity,
          price,
          amount }
          setItem("")
          setPrice("")
          setQuantity("")
          setAmount("")
        setList([...list,newItems])

      } 





        
         
        
        
            
           
      }

        useEffect(()=>{const calculateAmount=(amount)=>{
            setAmount(quantity*price)
        }
calculateAmount(amount)
        },[amount,price,quantity,setAmount])

// calculate total


useEffect(()=>{
  let rows=document.querySelectorAll('.amount')
  let sum=0
  for(let i=0;i<rows.length;i++){
      if(rows[i].className==='amount'){
          sum+=isNaN(rows[i].innerHTML)?0:parseInt(rows[i].innerHTML)
          setTotal(sum)
      }
  }
  
  


})



  return (
    <>

   <form onSubmit={handleSubmit}> 

   <div className='flex flex-col'>
    <label htmlFor='item-name'>Item-Name</label>
      <input type="text" name='item' id='item'
       placeholder='Enter the Item Name' value={item} 
       onChange={(e)=>setItem(e.target.value)}/>

<label htmlFor='item-name'>Quantity</label>
      <input type='Number' name='quantity' id='quantity'
       placeholder='Enter the  Quantity' value={quantity} 
       onChange={(e)=>setQuantity(e.target.value)}/>

<label htmlFor='item-name'>Price</label>
      <input type="text" name='price' id='price'
       placeholder='Enter the Price' value={price} 
       onChange={(e)=>setPrice(e.target.value)}/>

<label htmlFor='item-name'>Amount</label>
      <p>{amount}</p>






    </div>



   <button  type='submit' className='bg-blue-500
         text-white 
         font-bold 
         mt-5
         py-2 px-8 
         rounded shadow 
         border-2 hover:bg-transparent
         border-blue-500 hover:text-blue-500 
         transition-all duration-300'>Add Item</button>
        

   </form>
  
   <table width='100%' className='mt-5 mb-5'>
   <thead>
         <tr className=' bg-gray-400 p-1'>
          <td>Itaim-name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td className=''>Amount</td>
         </tr>
        </thead>
     {list.map(({id,amount,price,quantity,item})=>{

        return <React.Fragment key={id}>
          <tbody>
            <tr>
              <td>{item}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td className='amount'>{amount}</td>
            </tr>
          </tbody>






        </React.Fragment>
       



     
     })}
 </table>
    
   <div>
    <h2 className='text-gray-800 text-xl font-bold'>Rs.{total.toLocaleString()}</h2>
    </div>
     
    </>
  )
}

export default TableForm
