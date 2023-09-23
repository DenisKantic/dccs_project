import {React,useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaHome} from 'react-icons/fa';

const Header = () => {

    const [nav,setNav] = useState(false);
  return (
    <div>
        <header className='w-full fixed justify-between items-center bg-white drop-shadow-2xl
                           xxs:h-[300px] xxs:flex-none
                           md:h-[60px] md:flex'>

                <div className='flex h-[60px] items-center justify-center bg-[#3f9ac9] w-[80px]'>
                    <GiHamburgerMenu className='cursor-pointer' 
                    onClick={()=> setNav(!nav)}  size={30}></GiHamburgerMenu> 
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

              <div className={nav ? 'bg-[#e8e9eb] md:w-[280px] relative top-0 left-0 z-10 h-[50vh] duration-200' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
              <div className='bg-[#3f9ac9] flex flex-col items-center justify-center text-white
                            md:w-[280px] h-[60px]'>
                <h1 className='text-3xl cursor-pointer' onClick={()=>{setNav(!nav)}}>DCCS Tuzla</h1>
            </div>

                <ul className='flex justify-center flex-col pt-10'>
                    <li className='flex flex-row items-center border-l-8 border-[#3f9ac9] w-full 
                                   hover:bg-[#3f9ac9] hover:text-white cursor-pointer'>
                                    <FaHome className='ml-4' size={25}/>
                                    <p className='text-lg pl-2'>Start</p>
                                    </li>
                    <li className='flex flex-row items-center mt-4 border-l-8
                                   hover:bg-[#3f9ac9] hover:text-white cursor-pointer'>
                                    <GiHamburgerMenu className='ml-4' size={25}/>
                                    <p className='text-lg pl-2'>Machine Learning</p>
                                    </li>
                </ul>

              <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                  onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose>  
              </div>

    </div>
  )
}

export default Header