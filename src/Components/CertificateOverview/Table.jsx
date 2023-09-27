import React from 'react'

const Table = () => {
  return (
    <div className='w-full mt-10'>
        <button className='w-[180px] h-[40px] mb-5 bg-[#c2cc38] text-white'>New certificate</button>

        <table className='w-full text-left'>
            <tr className='h-[40px] border-solid border-2 border-[#d1d1d1]'>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Supplier</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Certificate Type</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid from</th>
            <th className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Valid to</th>
            </tr>

            <tr>
                <td className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Example 1</td>
                <td className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>Example 2</td>
                <td className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>1.1.2023</td>
                <td className='w-[25%] p-2 border-2 border-solid border-[#d1d1d1]'>12.3.2023</td>
            </tr>

            
        </table>
    </div>
  )
}

export default Table