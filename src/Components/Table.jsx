import React from 'react'

const Table = ({list,total}) => {
 
  return (
    <>
     <table width='100%' className='mt-5 mb-5'>
   <thead>
         <tr className=' bg-gray-400 p-1'>
          <td>Item-name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td className="amount">Amount</td>
         </tr>
        </thead>
        {list.map(({id,amount,price,quantity,item})=>{

          return <React.Fragment key={id}>
  <tbody>
    <tr>
      <td>{item}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{amount}</td>
    </tr>
  </tbody>

</React.Fragment>
        })}
</table>
<div>
    <h2 className='text-gray-600 text-xl font-bold flex items-end justify-end mr-14'> Total Amount: ₹{total.toLocaleString()}</h2>
    </div>
    </>
  )


     


    
  }

export default Table
