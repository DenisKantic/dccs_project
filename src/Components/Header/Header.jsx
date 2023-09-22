import {React,useState} from 'react'

const Navigation = () => {

    const [nav,setNav] = useState(false);
  return (
    <div>
        <header className='w-full justify-between items-center bg-white drop-shadow-2xl
                           xxs:h-[300px] xxs:flex-none
                           md:h-[60px] md:flex'>

            {/*Left blue part, with text "DCCS Tuzla"*/}
            <div className='bg-[#3f9ac9] flex flex-col items-center justify-center text-white
                            md:w-[250px] md:h-full'>
                <h1 className='text-3xl cursor-pointer' onClick={()=>{setNav(!nav)}}>DCCS Tuzla</h1>
            </div>


            {/* right part of the header, containing language dropdown and user"*/}
            <div className='flex items-center  flex-row mr-5'>
                <h1 className='mr-3'>Language:</h1>
                <select name="#" id="#" className='outline-none cursor-pointer p-1'>
                    <option value="en">English</option>
                    <option value="bhs">Bosnian</option>
                </select>

                <div className='pl-3 flex flex-row items-center mr-5'>
                <h1 className='mr-3'>User:</h1>
                <select name="#" id="#" className='outline-none cursor-pointer p-1 '>
                    <option value="user1">User 1</option>
                    <option value="user2">User 2</option>
                    <option value="user3">User 3</option>
                    <option value="user4">User 4</option>
                </select>
            </div>

            </div>

        </header>

    </div>
  )
}

export default Navigation