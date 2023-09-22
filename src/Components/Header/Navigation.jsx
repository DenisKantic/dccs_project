import {React,useState} from 'react'
import {FaHome} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navigation = () => {

    const [nav,setNav] = useState(false);
  return (
    <div>
        <header className='h-[60px] w-full bg-blue-400 flex flex-row justify-between items-center'>

            <div className='w-[250px] bg-red-400 flex flex-col h-full items-center justify-center'>
                <h1 className='text-3xl cursor-pointer hover:bg-white-400' onClick={()=>{setNav(!nav)}}>DCCS Tuzla</h1>
            </div>

            <div className='language flex flex-row mr-5'>
                <h1 className='mr-3'>Language:</h1>
                <select name="#" id="#">
                    <option value="en">English</option>
                    <option value="bhs">Bosnian</option>
                </select>
            </div>
        </header>

        <nav className={nav ? 'w-[250px] z-10 bg-orange-400 block sticky flex flex-col mx-start list-none' : 'hidden'}>
            <ul className='pt-8 h-[300px]'>
            <li className='flex items-center border-l-8'><FaHome  size={25} className='ml-5'/><a href="#" className='pl-2'>Start</a></li>
            <li className='flex items-center'><GiHamburgerMenu size={25} className='ml-8' /> <a href="">Machine Learning</a> 
               
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation